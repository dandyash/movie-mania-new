import useFetchFavoriteMovies from "./../../../apis/Favorites/Get/FavoriteMovies";

const useFavoriteMovies = () => {
  const moviesList = useFetchFavoriteMovies();

  return {
    moviesList: moviesList?.data?.data?.results,
    isDataLoading: moviesList.isLoading,
  };
};
export default useFavoriteMovies;
