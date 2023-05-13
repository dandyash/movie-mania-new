import { useQuery } from "@tanstack/react-query";
import apiClient from "../apiClient";
import { API_ROUTES } from "../../utils";

const MovieVideo = async (movieId) => {
  const result = await apiClient.get(API_ROUTES.MOVIE.VIDEO(movieId));
  return result.data.results[result.data.results.length - 1].key;
};

const useFetchMovieTrailer = (movieId) => {
  return useQuery([], () => MovieVideo(movieId), { enabled: false });
};
export default useFetchMovieTrailer;
