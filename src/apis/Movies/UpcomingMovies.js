import { useQuery } from "@tanstack/react-query";
import { API_QUERY_KEY, API_ROUTES } from "../../utils";
import apiClient from "../apiClient";

const UpcomingMovies = async () => {
  return await apiClient.get(API_ROUTES.MOVIE.UPCOMING);
};

const useGetUpcomingMovies = () => {
  return useQuery([API_QUERY_KEY.MOVIE.UPCOMING], UpcomingMovies);
};

export default useGetUpcomingMovies;
