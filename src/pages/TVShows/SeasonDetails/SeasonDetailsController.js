import { useParams } from "react-router-dom";
import useGetTvShowSeasonDetails from "../../../apis/TVShows/TvShowSeasonDetails";
import useGetTvShowDetails from "../../../apis/TVShows/TvShowDetails";

const useSeasonDetailsController = () => {
  const { tvId, seasonNumber } = useParams();
  const tvShowDetails = useGetTvShowDetails(tvId);
  const seasonDetails = useGetTvShowSeasonDetails(tvId, seasonNumber);
  return {
    seasonDetails: seasonDetails?.data?.data,
    tvShowDetails: tvShowDetails?.data?.data,
    isDataLoading: seasonDetails.isLoading && tvShowDetails.isLoading,
  };
};

export default useSeasonDetailsController;
