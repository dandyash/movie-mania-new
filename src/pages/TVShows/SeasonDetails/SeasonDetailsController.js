import { useParams } from "react-router-dom";
import useGetTvShowSeasonDetails from "../../../apis/TVShows/TvShowSeasonDetails";
import useGetTvShowDetails from "../../../apis/TVShows/TvShowDetails";

const useSeasonDetailsController = () => {
  const { tvId, seasonNumber } = useParams();
  const seasonDetails = useGetTvShowSeasonDetails(tvId, seasonNumber);
  return {
    seasonDetails: seasonDetails?.data?.data,
    isDataLoading: seasonDetails.isLoading,
  };
};

export default useSeasonDetailsController;
