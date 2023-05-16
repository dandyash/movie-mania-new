import { useParams } from "react-router-dom";
import useGetMovieCollectionDetails from "./../../apis/Movies/MovieCollectionDetails";

const useCollectionController = () => {
  const { collectionId } = useParams();
  const collectionDetails = useGetMovieCollectionDetails(collectionId);
  return {
    collectionDetails: collectionDetails?.data?.data,
    isDataLoading: collectionDetails.isLoading,
  };
};

export default useCollectionController;
