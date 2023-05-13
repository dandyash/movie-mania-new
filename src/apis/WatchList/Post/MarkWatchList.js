import { useMutation } from "@tanstack/react-query";
import { API_ROUTES, API_QUERY_KEY } from "../../../utils";
import apiClient from "../../apiClient";

const MarkWatchList = async (media_type, media_id, watchlist) => {
  return await apiClient.post(
    API_ROUTES.WATCHLIST.ADD_REMOVE,
    {
      media_type: media_type,
      media_id: media_id,
      watchlist: watchlist,
    },
    {
      params: {
        session_id: localStorage.getItem("session"),
      },
    }
  );
};

const useMarkWatchList = (media_type, media_id) => {
  return useMutation([API_QUERY_KEY.WATCHLIST, media_id], (watchlist) =>
    MarkWatchList(media_type, media_id, watchlist)
  );
};

export default useMarkWatchList;
