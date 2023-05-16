import useFetchFavoriteTvShows from "./../../../apis/Favorites/Get/FavoriteTvs";

const useFavoriteTvShowsController = () => {
  const tvShowsList = useFetchFavoriteTvShows();
  return {
    tvShowsList: tvShowsList?.data?.data?.results,
    isDataLoading: tvShowsList.isLoading,
  };
};
export default useFavoriteTvShowsController;
