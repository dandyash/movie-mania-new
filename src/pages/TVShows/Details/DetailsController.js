import { useParams } from "react-router-dom";
import useGetTvShowDetails from "../../../apis/TVShows/TvShowDetails";
import { useState, useEffect } from "react";
import useMarkFavorite from "../../../apis/Favorites/Post/MarkFavorite";
import { useContext } from "react";
import { NotificationContext } from "./../../../context/NotificationContext";
import useMarkWatchList from "./../../../apis/WatchList/Post/MarkWatchList";

const useDetailsController = () => {
  const { tvId } = useParams();
  const tvShowDetails = useGetTvShowDetails(tvId);
  const markFavorite = useMarkFavorite("tv", tvId);
  const markWatchList = useMarkWatchList("tv", tvId);
  //   const firstAirDate = new Date(tvShowDetails?.data?.data?.first_air_date);
  //   const lastAirDate = new Date(tvShowDetails?.data?.data?.last_air_date);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoKey, setVideoKey] = useState();

  const { showNotification } = useContext(NotificationContext);

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
      tvShowDetails.refetch();
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
      tvShowDetails.refetch();
    }
    //eslint-disable-next-line
  }, [markWatchList.isSuccess]);

  return {
    tvShowDetails: tvShowDetails?.data?.data,
    isDataLoading: tvShowDetails.isLoading,
    // firstAirDate,
    // lastAirDate,
    isVideoModalOpen,
    showModal,
    hideModal,
    videoKey,
    toggleFavorite,
    toggleWatchList,
  };
};

export default useDetailsController;
