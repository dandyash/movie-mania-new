import { useQuery } from "@tanstack/react-query";
import { API_QUERY_KEY, API_ROUTES } from "../../utils";
import apiClient from "./../apiClient";

const tvShowSeasonDetails = async (tvId, seasonNumber) => {
  return await apiClient(API_ROUTES.TV.SEASON_DETAILS(tvId, seasonNumber));
};

const useGetTvShowSeasonDetails = (tvId, seasonNumber) => {
  return useQuery([API_QUERY_KEY.TV.SEASON_DETAILS, tvId, seasonNumber], () =>
    tvShowSeasonDetails(tvId, seasonNumber)
  );
};

export default useGetTvShowSeasonDetails;
