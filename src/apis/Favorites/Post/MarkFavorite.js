import { useMutation } from "@tanstack/react-query";
import { API_ROUTES, API_QUERY_KEY } from "../../../utils";
import apiClient from "../../apiClient";

const MarkFavorite = async (media_type, media_id, favorite) => {
  return await apiClient.post(
    API_ROUTES.FAVORITE.ADD_REMOVE,
    {
      media_type: media_type,
      media_id: media_id,
      favorite: favorite,
    },
    {
      params: {
        session_id: localStorage.getItem("session"),
      },
    }
  );
};

const useMarkFavorite = (media_type, media_id) => {
  return useMutation([API_QUERY_KEY.FAVORITE, media_id], (favorite) =>
    MarkFavorite(media_type, media_id, favorite)
  );
};

export default useMarkFavorite;
