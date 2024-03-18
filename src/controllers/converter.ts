import axiosClient from "../libs/axios";
import { ApiResponse, Currency } from "../types/types.global";

export const convertCurrency = async (fromCurrency : Currency, toCurrency :Currency, amount:number)  : Promise<number>=> {
    try {
      const response = await axiosClient.get<ApiResponse | null>(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
      if (!response.data) {
        return 0
      }
      return response.data.conversion_result ;
    } catch (error) {
      console.error('Error while fetching the exchange rate:', error);
      return 0;
    }
  };
  
  // export const convertUsdToEur = (amount:number) : Promise<ApiResponse | null> => convertCurrency('USD', 'EUR', amount);
  // export const convertUsdToJpy = (amount:number) : Promise<ApiResponse | null> => convertCurrency('USD', 'JPY', amount);
  // export const convertEurToUsd = (amount:number) : Promise<ApiResponse | null> => convertCurrency('EUR', 'USD', amount);
  // export const convertEurToJpy = (amount:number) : Promise<ApiResponse | null> => convertCurrency('EUR', 'JPY', amount);
  // export const convertJpyToUsd = (amount:number) : Promise<ApiResponse | null> => convertCurrency('JPY', 'USD', amount);
  // export const convertJpyToEur = (amount:number) : Promise<ApiResponse | null> => convertCurrency('JPY', 'EUR', amount);