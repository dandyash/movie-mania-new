import { useQuery } from "@tanstack/react-query";
import { API_QUERY_KEY, API_ROUTES } from "../../utils";
import apiClient from "../apiClient";

const UserDetails = async () => {
  return await apiClient.get(API_ROUTES.USER_DETAILS, {
    params: {
      session_id: localStorage.getItem("session"),
    },
  });
};

const useFetchUserDetails = () => {
  return useQuery([API_QUERY_KEY.USER_DETAILS], UserDetails, {
    enabled: false,
  });
};

export default useFetchUserDetails;
