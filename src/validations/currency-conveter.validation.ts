import * as yup from 'yup';

import { Currency } from "../types/types.global";

export type FormValues = {
    amountFrom: number; 
    currencyFrom: Currency;
    amountTo: number; 
    currencyTo: Currency;
  };
  
 export const CurrencyValidationSchema = yup.object({
    amountFrom: yup.number().min(0).required(),
    currencyFrom: yup.mixed<Currency>().oneOf(["USD", "EUR", "JPY"]).required(),
    amountTo: yup.number().min(0), 
    currencyTo: yup.mixed<Currency>().oneOf(["USD", "EUR", "JPY"]).required(),
  }).required();