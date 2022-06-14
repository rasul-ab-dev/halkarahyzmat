import axios from "axios";

const useApi = () => {
  const api = axios.create({
    baseURL: "https://u1634535.plsk.regruhosting.ru/api",
  });
  return api;
};

export default useApi;
