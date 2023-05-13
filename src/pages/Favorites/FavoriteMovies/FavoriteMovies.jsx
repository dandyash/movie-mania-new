import React from "react";
import useFavoriteMovies from "./FavoriteMoviesController";
import ImageCard from "../../../components/ImageCard";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const FavoriteMovies = () => {
  const { moviesList } = useFavoriteMovies();

  if (moviesList.isLoading || moviesList.isFetching) {
    return (
      <div className="flex items-center justify-center py-10">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 max-[400px]:grid-cols-1 gap-5 pb-10">
      {moviesList.data.data.results.map((movie) => (
        <ImageCard
          key={movie.id}
          data={movie}
        />
      ))}
    </div>
  );
};

export default FavoriteMovies;
