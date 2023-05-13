import { useQuery } from "@tanstack/react-query";
import { API_QUERY_KEY, API_ROUTES } from "../../utils";
import apiClient from "../apiClient";

const fetchTrending = async (category, time) => {
  return await apiClient.get(`${API_ROUTES.TRENDING}/${category}/${time}`);
};

const useGetTrending = (category, time) => {
  return useQuery([API_QUERY_KEY.TRENDING, category, time], () =>
    fetchTrending(category, time)
  );
};

export default useGetTrending;
