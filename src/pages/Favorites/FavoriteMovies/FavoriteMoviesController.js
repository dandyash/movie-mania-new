import useFetchFavoriteMovies from "./../../../apis/Favorites/Get/FavoriteMovies";

const useFavoriteMovies = () => {
  const moviesList = useFetchFavoriteMovies();

  return {
    moviesList,
  };
};
export default useFavoriteMovies;
