import { useQuery } from "@tanstack/react-query";
import { API_QUERY_KEY, API_ROUTES } from "../../utils";
import apiClient from "../apiClient";

const PopularMovies = async () => {
  return await apiClient.get(API_ROUTES.MOVIE.POPULAR);
};

const useGetPopularMovies = () => {
  return useQuery([API_QUERY_KEY.MOVIE.POPULAR], PopularMovies);
};
export default useGetPopularMovies;
