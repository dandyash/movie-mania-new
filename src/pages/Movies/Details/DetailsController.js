import { useParams } from "react-router-dom";
import useGetMovieDetails from "../../../apis/Movies/MovieDetails";
import { useContext, useEffect, useState } from "react";
import { NotificationContext } from "../../../context/NotificationContext";
import useMarkWatchList from "../../../apis/WatchList/Post/MarkWatchList";
import useMarkFavorite from "../../../apis/Favorites/Post/MarkFavorite";

const useMovieDetailsController = () => {
  const { movieId } = useParams();
  const movieDetails = useGetMovieDetails(movieId);

  const markFavorite = useMarkFavorite("movie", movieId);
  const markWatchList = useMarkWatchList("movie", movieId);

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoKey, setVideoKey] = useState();

  const { showNotification } = useContext(NotificationContext);

  const releaseDate = new Date(movieDetails?.data?.data?.release_date);

  const showModal = (videoKey) => {
    setIsVideoModalOpen(true);
    setVideoKey(videoKey);
  };

  const hideModal = () => {
    setIsVideoModalOpen(false);
    setVideoKey("");
  };

  const toggleFavorite = (isFavorite) => {
    markFavorite.mutate(isFavorite);
  };
  const toggleWatchList = (isWatchList) => {
    markWatchList.mutate(isWatchList);
  };

  useEffect(() => {
    if (markFavorite.isSuccess) {
      const message = String(markFavorite?.data?.data?.status_message).includes(
        "Success."
      )
        ? "Item Added to Favorites Successfully"
        : "Item removed from Favorites Successfully";
      showNotification(message, "success");
      movieDetails.refetch();
    }
    //eslint-disable-next-line
  }, [markFavorite.isSuccess]);
  useEffect(() => {
    if (markWatchList.isSuccess) {
      const message = String(
        markWatchList?.data?.data?.status_message
      ).includes("Success.")
        ? "Item Added to WatchList Successfully"
        : "Item removed from WatchList Successfully";
      showNotification(message, "success");
      movieDetails.refetch();
    }
    //eslint-disable-next-line
  }, [markWatchList.isSuccess]);

  return {
    movieDetails: movieDetails?.data?.data,
    releaseDate,
    isDataLoading: movieDetails.isLoading,
    showModal,
    hideModal,
    isVideoModalOpen,
    videoKey,
    toggleFavorite,
    toggleWatchList,
  };
};

export default useMovieDetailsController;
