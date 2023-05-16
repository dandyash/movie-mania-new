import { useState } from "react";
import useGetTrending from "../../apis/Common/Trending";
import useGetDiscover from "../../apis/Common/Discover";
import useGetPopularMovies from "../../apis/Movies/PopularMovies";
import useGetPopularTvShows from "../../apis/TVShows/PopularTvShows";

const useHomeController = () => {
  const [trendingPeriod, setTrendingPeriod] = useState("day");
  const [discoverMediaType, setdiscoverMediaType] = useState("movie");

  const HeroBannerList = useGetTrending("all", "day");
  const TrendingList = useGetTrending("all", trendingPeriod);
  const DiscoverFreeMediaList = useGetDiscover(discoverMediaType, {
    with_watch_monetization_types: "free",
    "vote_average.gte": "7.5",
  });
  const PopularMoviesList = useGetPopularMovies();
  const PoppularTvShowsList = useGetPopularTvShows();

  return {
    HeroBannerList: HeroBannerList?.data?.data?.results,
    TrendingList: TrendingList?.data?.data?.results,
    DiscoverFreeMediaList: DiscoverFreeMediaList?.data?.data?.results,
    PopularMoviesList: PopularMoviesList?.data?.data?.results,
    PoppularTvShowsList: PoppularTvShowsList?.data?.data?.results,
    trendingPeriod,
    setTrendingPeriod,
    discoverMediaType,
    setdiscoverMediaType,
    isDataLoading:
      HeroBannerList.isLoading ||
      TrendingList.isLoading ||
      DiscoverFreeMediaList.isLoading ||
      PopularMoviesList.isLoading ||
      PoppularTvShowsList.isLoading,
  };
};
export default useHomeController;
