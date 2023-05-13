import { useQuery } from "@tanstack/react-query";
import { API_QUERY_KEY, API_ROUTES } from "../../utils";
import apiClient from "../apiClient";

const MovieDetails = async (movieId) => {
  return await apiClient.get(API_ROUTES.MOVIE.DETAILS(movieId), {
    params: {
      session_id: localStorage.getItem("session"),
      append_to_response:
        "reviews,account_states,videos,credits,recommendations,keywords",
    },
  });
};

const useGetMovieDetails = (movieId) => {
  return useQuery([API_QUERY_KEY.MOVIE.DETAILS, movieId], () =>
    MovieDetails(movieId)
  );
};

export default useGetMovieDetails;
