import { useQuery } from "@tanstack/react-query";
import { API_QUERY_KEY, API_ROUTES } from "../../utils";
import apiClient from "../apiClient";

const AiringTodayTvShows = async () => {
  return await apiClient.get(API_ROUTES.TV.AIRING_TODAY);
};

const useGetAiringTodayTvShows = () => {
  return useQuery([API_QUERY_KEY.TV.AIRING_TODAY], AiringTodayTvShows);
};

export default useGetAiringTodayTvShows;
