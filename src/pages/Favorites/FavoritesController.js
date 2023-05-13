import { useParams } from "react-router-dom";

const useFavorites = () => {
  const { favCategory } = useParams();
  const tabItems = [
    { title: "Movies", link: "/favorites/movies" },
    { title: "TV Shows", link: "/favorites/tvshows" },
  ];
  return {
    tabItems,
    favCategory,
  };
};

export default useFavorites;
