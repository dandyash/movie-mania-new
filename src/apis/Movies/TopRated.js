import { useQuery } from "@tanstack/react-query";
import { API_QUERY_KEY, API_ROUTES } from "../../utils";
import apiClient from "../apiClient";

const TopRatedMovies = async () => {
  return await apiClient.get(API_ROUTES.MOVIE.TOP_RATED);
};

const useGetTopRatedMovies = () => {
  return useQuery([API_QUERY_KEY.MOVIE.TOP_RATED], TopRatedMovies);
};
export default useGetTopRatedMovies;
