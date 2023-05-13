import useFetchFavoriteTvShows from "./../../../apis/Favorites/Get/FavoriteTvs";

const useFavoriteTvShowsController = () => {
  const tvShowsList = useFetchFavoriteTvShows();
  return {
    tvShowsList,
  };
};
export default useFavoriteTvShowsController;
