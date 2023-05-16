import { useQuery } from "@tanstack/react-query";
import apiClient from "./../apiClient";
import { API_QUERY_KEY, API_ROUTES } from "./../../utils/index";
const MovieCollectionDetails = async (collectionId) => {
  return await apiClient.get(API_ROUTES.MOVIE.COLLECTION(collectionId));
};

const useGetMovieCollectionDetails = (collectionId) => {
  return useQuery([API_QUERY_KEY.MOVIE.COLLECTION, collectionId], () =>
    MovieCollectionDetails(collectionId)
  );
};

export default useGetMovieCollectionDetails;
