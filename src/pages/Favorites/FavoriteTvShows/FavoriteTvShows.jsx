import React from "react";
import useFavoriteTvShowsController from "./FavoriteTvShowsController";
import ImageCard from "../../../components/ImageCard";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const FavoriteTvShows = () => {
  const { tvShowsList, isDataLoading } = useFavoriteTvShowsController();

  if (isDataLoading) {
    return (
      <div className="flex items-center justify-center py-10">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 pb-10">
      {tvShowsList.map((tvShow) => (
        <ImageCard
          key={tvShow.id}
          data={tvShow}
        />
      ))}
    </div>
  );
};

export default FavoriteTvShows;
