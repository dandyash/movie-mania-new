import { useQuery } from "@tanstack/react-query";
import { API_QUERY_KEY, API_ROUTES } from "../../utils";
import apiClient from "./../apiClient";

const TvShowDetails = async (tvId) => {
  return await apiClient.get(API_ROUTES.TV.DETAILS(tvId), {
    params: {
      session_id: localStorage.getItem("session"),
      append_to_response:
        "reviews,account_states,videos,credits,recommendations,similar,content_ratings,keywords",
    },
  });
};

const useGetTvShowDetails = (tvId) => {
  return useQuery([API_QUERY_KEY.TV.DETAILS, tvId], () => TvShowDetails(tvId));
};

export default useGetTvShowDetails;
