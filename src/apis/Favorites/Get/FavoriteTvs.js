import { useQuery } from "@tanstack/react-query";
import { API_QUERY_KEY, API_ROUTES } from "../../../utils";
import apiClient from "../../apiClient";

const favoriteTvShows = async () => {
  return await apiClient.get(API_ROUTES.FAVORITE.TV, {
    params: {
      session_id: localStorage.getItem("session"),
    },
  });
};

const useFetchFavoriteTvShows = () => {
  return useQuery([API_QUERY_KEY.FAVORITE_TV], favoriteTvShows);
};

export default useFetchFavoriteTvShows;
