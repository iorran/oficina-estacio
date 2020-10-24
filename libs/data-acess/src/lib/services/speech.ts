import useSWR from "swr";
import { api } from './api';

export const  useSpeech = <Data = unknown, Error = unknown> (url: string) => {
  const { data, error } = useSWR<Data, Error>(
    url,
    async (url) => {
      const response = await api.get<Data>(url);
      return response.data;
    },
    {
      revalidateOnFocus: true,
    }
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}
