import { useQuery } from "@tanstack/react-query";
import { API_QUERY_KEY, API_ROUTES } from "../../utils";
import apiClient from "../apiClient";

const OnAirTvShows = async () => {
  return await apiClient.get(API_ROUTES.TV.ON_THE_AIR);
};

const useGetOnAirTvShows = () => {
  return useQuery([API_QUERY_KEY.TV.ON_THE_AIR], OnAirTvShows);
};

export default useGetOnAirTvShows;
