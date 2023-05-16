import apiClient from "./../apiClient";
import { API_QUERY_KEY, API_ROUTES } from "./../../utils/index";
import { useQuery } from "@tanstack/react-query";
const Search = async (searchVal, pageNumber) => {
  return await apiClient.get(API_ROUTES.SEARCH, {
    params: {
      query: searchVal,
      page: pageNumber,
    },
  });
};

const useGetSearchResults = (searchVal, pageNumber) => {
  return useQuery([API_QUERY_KEY.SEARCH, searchVal, pageNumber], () =>
    Search(searchVal, pageNumber)
  );
};

export default useGetSearchResults;
