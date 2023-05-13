import { useQuery } from "@tanstack/react-query";
import { API_QUERY_KEY, API_ROUTES } from "../../utils";
import apiClient from "../apiClient";

const TopRatedTvShows = async () => {
  return await apiClient.get(API_ROUTES.TV.TOP_RATED);
};

const useGetTopRatedTvShows = () => {
  return useQuery([API_QUERY_KEY.TV.TOP_RATED], TopRatedTvShows);
};

export default useGetTopRatedTvShows;
