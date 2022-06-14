import { useEffect, useState } from "react";
import useApi from "./useApi";

const useAsyncData = (url) => {
  const api = useApi();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await api.get(url);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return { data, isLoading, isError };
};

export default useAsyncData;
