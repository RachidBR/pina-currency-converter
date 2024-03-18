import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { convertCurrency } from "../controllers/converter";
import {
  CurrencyValidationSchema,
  FormValues,
} from "../validations/currency-conveter.validation";

import styles from "./CurrencyConverter.module.scss";

function CurrencyConverter() {
  const { register, setValue, watch } = useForm<FormValues>({
    resolver: yupResolver(CurrencyValidationSchema),
    defaultValues: {
      amountFrom: 0,
      amountTo: 0,
      currencyFrom: "USD",
      currencyTo: "EUR",
    },
  });

  const [lastUpdated, setLastUpdated] = useState<"from" | "to">("from");

  const watchedFields = watch();
  useEffect(() => {
    const convert = async () => {
      let result: number = 0;
      if (lastUpdated === "from") {
        result = await convertCurrency(
          watchedFields.currencyFrom,
          watchedFields.currencyTo,
          watchedFields.amountFrom
        );
        setValue("amountTo", result);
      } else {
        result = await convertCurrency(
          watchedFields.currencyTo,
          watchedFields.currencyFrom,
          watchedFields.amountTo
        );
        setValue("amountFrom", result);
      }
    };

    if (
      (watchedFields.amountFrom  && lastUpdated === "from") ||
      (watchedFields.amountTo  && lastUpdated === "to")
    ) {
      convert();
    }
  }, [watchedFields, lastUpdated]);

  return (
    <article className={styles.currencyConveter}>
      <form className={styles.currencyConveter__form}>
        <section className={styles.currencyConveter__form__currencyFrom}>
          <div>
            <label htmlFor="currencyFrom">Currency From:</label>
            <select
              id="currencyFrom"
              {...register("currencyFrom", {
                onChange: () => setLastUpdated("from"),
              })}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="JPY">JPY</option>
            </select>
          </div>
            <input
              type="number"
              {...register("amountFrom", {
                onChange: () => setLastUpdated("from"),
              })}
            />
        </section>

        <section className={styles.currencyConveter__form__currencyFrom}>
          <div>
            <label htmlFor="currencyTo">Currency To:</label>
            <select
              id="currencyTo"
              {...register("currencyTo", {
                onChange: () => setLastUpdated("to"),
              })}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="JPY">JPY</option>
            </select>
          </div>
            <input
              type="number"
              {...register("amountTo", {
                onChange: () => setLastUpdated("to"),
              })}
            />
        </section>
      </form>
    </article>
  );
}

export default CurrencyConverter;
