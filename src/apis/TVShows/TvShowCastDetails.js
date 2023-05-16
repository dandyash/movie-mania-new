import apiClient from "./../apiClient";
import { API_QUERY_KEY, API_ROUTES } from "./../../utils/index";
import { useQuery } from "@tanstack/react-query";

const TvShowCastDetails = async (tvId) => {
  return await apiClient.get(API_ROUTES.TV.CREDITS(tvId));
};

const useGetTvShowCastDetails = (tvId) => {
  return useQuery([API_QUERY_KEY.TV.CREDITS, tvId], () =>
    TvShowCastDetails(tvId)
  );
};

export default useGetTvShowCastDetails;
