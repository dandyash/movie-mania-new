import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import MovieRoutes from "./pages/Movies/MovieRoutes";
import TvShowsRoutes from "./pages/TVShows/TvShowsRoutes";

function App() {
  return (
    <div className="dark:bg-black dark:text-white text-black min-h-screen">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/*" element={<MovieRoutes />} />
          <Route path="/tv/*" element={<TvShowsRoutes />} />
          <Route path="/favorites/:favCategory" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
