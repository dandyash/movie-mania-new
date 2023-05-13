import { useQuery } from "@tanstack/react-query";
import { API_QUERY_KEY, API_ROUTES } from "../../utils";
import apiClient from "../apiClient";

const LatestMovies = async () => {
  return await apiClient.get(API_ROUTES.MOVIE.LATEST);
};

const useGetLatestMovies = () => {
  return useQuery([API_QUERY_KEY.MOVIE.LATEST], LatestMovies);
};

export default useGetLatestMovies;
