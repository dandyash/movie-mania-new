import React from "react";
import CommonBanner from "../../components/Banner/CommonBanner";
import FavoriteMovies from "./FavoriteMovies/FavoriteMovies";
import TabsContainer from "../../components/TabsContainer";
import useFavorites from "./FavoritesController";
import FavoriteTvShows from "./FavoriteTvShows/FavoriteTvShows";

const Favorite = () => {
  const { tabItems, favCategory } = useFavorites();
  return (
    <div className="">
      <CommonBanner
        title="Favorites"
        // description="List Of Favourite Marked Movies & TV Shows"
        backDrop="https://www.themoviedb.org/assets/2/v4/account_pipes/red-b64316df5633aa0687196d10fa429418035b55122c0b5726082669b9748a0e2a.svg"
      />
      <section className="px-5 container mx-auto">
        <TabsContainer tabs={tabItems} active={favCategory} />
        {favCategory === "movies" ? <FavoriteMovies /> : <FavoriteTvShows />}
      </section>
    </div>
  );
};

export default Favorite;
