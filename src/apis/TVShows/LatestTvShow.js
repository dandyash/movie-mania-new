import { useQuery } from "@tanstack/react-query";
import { API_QUERY_KEY, API_ROUTES } from "../../utils";
import apiClient from "../apiClient";

const LatestTvShow = async () => {
  return await apiClient.get(API_ROUTES.TV.LATEST);
};

const useGetLatestTvShow = () => {
  return useQuery([API_QUERY_KEY.TV.LATEST], LatestTvShow);
};

export default useGetLatestTvShow;
