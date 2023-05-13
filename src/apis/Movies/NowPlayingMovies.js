import { useQuery } from "@tanstack/react-query";
import { API_QUERY_KEY, API_ROUTES } from "../../utils";
import apiClient from "../apiClient";

const NowPlayingMovies = async () => {
  return await apiClient.get(API_ROUTES.MOVIE.NOW_PLAYING);
};

const useGetNowPlayingMovies = () => {
  return useQuery([API_QUERY_KEY.MOVIE.NOW_PLAYING], NowPlayingMovies);
};

export default useGetNowPlayingMovies;
