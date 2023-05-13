import { useQuery } from "@tanstack/react-query";
import { API_QUERY_KEY, API_ROUTES } from "../../../utils";
import apiClient from "../../apiClient";

const favoriteMovies = async () => {
  return await apiClient.get(API_ROUTES.FAVORITE.MOVIES, {
    params: {
      session_id: localStorage.getItem("session"),
    },
  });
};

const useFetchFavoriteMovies = () => {
  return useQuery([API_QUERY_KEY.FAVORITE_MOVIES], favoriteMovies);
};

export default useFetchFavoriteMovies;
