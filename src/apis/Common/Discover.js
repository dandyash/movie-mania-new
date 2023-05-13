import { useQuery } from "@tanstack/react-query";
import { API_QUERY_KEY, API_ROUTES } from "../../utils";
import apiClient from "../apiClient";

const fetchDiscover = async (category, params) => {
  return await apiClient.get(`${API_ROUTES.DISCOVER}/${category}`, {
    params: params,
  });
};

const useGetDiscover = (category, params) => {
  return useQuery([API_QUERY_KEY.DISCOVER, category], () =>
    fetchDiscover(category, params)
  );
};

export default useGetDiscover;
