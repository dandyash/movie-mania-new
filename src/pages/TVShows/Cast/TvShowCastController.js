import { useParams } from "react-router-dom";
import useGetTvShowCastDetails from "../../../apis/TVShows/TvShowCastDetails";
import useGetTvShowDetails from "./../../../apis/TVShows/TvShowDetails";

const useTvShowCastController = () => {
  const { tvId } = useParams();
  const tvShowCastDetails = useGetTvShowCastDetails(tvId);
  const tvShowDetails = useGetTvShowDetails(tvId);
  return {
    tvShowCastDetails: tvShowCastDetails?.data?.data,
    tvShowDetails: tvShowDetails?.data?.data,
    isDataLoading: tvShowCastDetails.isLoading || tvShowDetails.isLoading,
  };
};

export default useTvShowCastController;
