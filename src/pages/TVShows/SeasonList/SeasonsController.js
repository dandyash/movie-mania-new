import { useParams } from "react-router-dom";
import useGetTvShowDetails from "../../../apis/TVShows/TvShowDetails";

const useSeasonsController = () => {
  const { tvId } = useParams();
  const tvShowDetails = useGetTvShowDetails(tvId);
  return {
    tvShowDetails: tvShowDetails?.data?.data,
    isDataLoading: tvShowDetails.isLoading,
  };
};

export default useSeasonsController;
