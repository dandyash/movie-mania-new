import { useMutation } from "@tanstack/react-query";
import { API_QUERY_KEY, API_ROUTES } from "../../utils";
import apiClient from "../apiClient";

const requestSession = async (requestToken) => {
  return await apiClient.post(API_ROUTES.REQUEST_SESSION, requestToken);
};

const useRequestSession = () => {
  return useMutation([API_QUERY_KEY.REQUEST_SESSION], requestSession);
};

export default useRequestSession;
