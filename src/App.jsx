import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import MovieRoutes from "./pages/Movies/MovieRoutes";
import TvShowsRoutes from "./pages/TVShows/TvShowsRoutes";
import Collection from "./pages/Collections/Collection";
import PersonDetails from "./pages/Person/PersonDetails";
import Search from "./pages/Search/Search";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="dark:bg-black dark:text-white text-black min-h-screen">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/*" element={<MovieRoutes />} />
          <Route path="/collection/:collectionId" element={<Collection />} />
          <Route path="/tv/*" element={<TvShowsRoutes />} />
          <Route path="/favorites/:favCategory" element={<Favorites />} />
          <Route path="/person/:personId" element={<PersonDetails />} />
          <Route path="/search/*" element={<Search />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
