import { useParams } from "react-router-dom";
import useGetMovieCastDetails from "../../../apis/Movies/MovieCastDetails";
import useGetMovieDetails from "./../../../apis/Movies/MovieDetails";

const useMovieCastController = () => {
  const { movieId } = useParams();
  const movieCastDetails = useGetMovieCastDetails(movieId);
  const movieDetails = useGetMovieDetails(movieId);
  return {
    movieCastDetails: movieCastDetails?.data?.data,
    movieDetails: movieDetails?.data?.data,
    isDataLoading: movieCastDetails.isLoading || movieDetails.isLoading,
  };
};

export default useMovieCastController;
