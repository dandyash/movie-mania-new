import apiClient from "./../apiClient";
import { API_QUERY_KEY, API_ROUTES } from "./../../utils/index";
import { useQuery } from "@tanstack/react-query";

const MovieCastDetails = async (movieId) => {
  return await apiClient.get(API_ROUTES.MOVIE.CREDITS(movieId));
};

const useGetMovieCastDetails = (movieId) => {
  return useQuery([API_QUERY_KEY.MOVIE.CREDITS, movieId], () =>
    MovieCastDetails(movieId)
  );
};

export default useGetMovieCastDetails;
