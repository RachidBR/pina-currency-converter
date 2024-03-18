import * as yup from 'yup';

import { Currency } from "../types/types.global";

export type FormValues = {
    amountFrom: number; 
    currencyFrom: Currency;
    amountTo: number; 
    currencyTo: Currency;
  };
  
  // Updated Yup schema to handle numbers correctly
 export const CurrencyValidationSchema = yup.object({
    amountFrom: yup.number().min(0).required('Amount is required'),
    currencyFrom: yup.mixed<Currency>().oneOf(["USD", "EUR", "JPY"]).required('Currency is required'),
    amountTo: yup.number().min(0), 
    currencyTo: yup.mixed<Currency>().oneOf(["USD", "EUR", "JPY"]).required('Currency is required'),
  }).required();