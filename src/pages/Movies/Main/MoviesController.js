import { useState } from "react";
import useGetTrending from "../../../apis/Common/Trending";
import useGetTopRatedMovies from "../../../apis/Movies/TopRated";
import useGetUpcomingMovies from "../../../apis/Movies/UpcomingMovies";
import useGetNowPlayingMovies from "../../../apis/Movies/NowPlayingMovies";

const useMoviesController = () => {
  const [trendingPeriod, setTrendingPeriod] = useState("day");

  const HeroBannerList = useGetTrending("movie", "day");
  const TrendingMovieList = useGetTrending("movie", trendingPeriod);
  const TopRatedMoviesList = useGetTopRatedMovies();
  const UpcomingMoviesList = useGetUpcomingMovies();
  const NowPlayingMovies = useGetNowPlayingMovies();

  return {
    HeroBannerList,
    TrendingMovieList,
    TopRatedMoviesList,
    NowPlayingMovies,
    UpcomingMoviesList,
    trendingPeriod,
    setTrendingPeriod,
    isDataLoading:
      HeroBannerList.isLoading &&
      TrendingMovieList.isLoading &&
      TopRatedMoviesList.isLoading &&
      NowPlayingMovies.isLoading &&
      UpcomingMoviesList.isLoading,
  };
};
export default useMoviesController;
