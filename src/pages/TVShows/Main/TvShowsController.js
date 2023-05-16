import { useState } from "react";
import useGetTrending from "../../../apis/Common/Trending";
import useGetTopRatedTvShows from "../../../apis/TVShows/TopRatedTvShows";
import useGetAiringTodayTvShows from "../../../apis/TVShows/AiringTodayTvShows";

const useTvShowsController = () => {
  const [trendingPeriod, setTrendingPeriod] = useState("day");

  const HeroBannerList = useGetTrending("tv", "day");
  const TrendingTvShowsList = useGetTrending("tv", trendingPeriod);
  const TopRatedTvShowsList = useGetTopRatedTvShows();
  const AiringTodayTvShowsList = useGetAiringTodayTvShows();

  return {
    HeroBannerList: HeroBannerList?.data?.data?.results,
    TrendingTvShowsList: TrendingTvShowsList?.data?.data?.results,
    TopRatedTvShowsList: TopRatedTvShowsList?.data?.data?.results,
    AiringTodayTvShowsList: AiringTodayTvShowsList?.data?.data?.results,
    trendingPeriod,
    setTrendingPeriod,
    isDataLoading:
      HeroBannerList.isLoading ||
      TrendingTvShowsList.isLoading ||
      TopRatedTvShowsList.isLoading ||
      AiringTodayTvShowsList.isLoading,
  };
};

export default useTvShowsController;
