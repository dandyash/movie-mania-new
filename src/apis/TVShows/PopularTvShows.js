import { useQuery } from "@tanstack/react-query";
import { API_QUERY_KEY, API_ROUTES } from "../../utils";
import apiClient from "../apiClient";

const PopularTvShows = async () => {
  return await apiClient.get(API_ROUTES.TV.POPULAR);
};
const useGetPopularTvShows = () => {
  return useQuery([API_QUERY_KEY.TV.POPULAR], PopularTvShows);
};

export default useGetPopularTvShows;
