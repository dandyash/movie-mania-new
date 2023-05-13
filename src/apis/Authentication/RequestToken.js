import { useQuery } from "@tanstack/react-query";
import apiClient from "../apiClient";
import { API_QUERY_KEY, API_ROUTES } from "../../utils";

const getRequestToken = async () => {
  return await apiClient.get(API_ROUTES.REQUEST_TOKEN);
};

const useRequestToken = () => {
  return useQuery([API_QUERY_KEY.REQUEST_TOKEN], getRequestToken, {
    enabled: false,
  });
};
export default useRequestToken;
