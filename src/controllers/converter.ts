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
  
