export const API_QUERY_KEY = {
  REQUEST_TOKEN: "REQUEST_TOKEN",
  REQUEST_SESSION: "REQUEST_SESSION",
  REMOVE_SESSION: "REMOVE_SESSION",
  USER_DETAILS: "USER_DETAILS",
  FAVORITE: "FAVORITE",
  FAVORITE_MOVIES: "FAVORITE_MOVIES",
  FAVORITE_TV: "FAVORITE_TV",
  WATCHLIST: "WATCHLIST",
  WATCHLIST_MOVIE: "WATCHLIST_MOVIE",
  WATCHLIST_TV: "WATCHLIST_TV",
  TRENDING: "TRENDING",
  DISCOVER: "DISCOVER",
  MOVIE: {
    LATEST: `MOVIE.LATEST`,
    NOW_PLAYING: `MOVIE.NOW_PLAYING`,
    POPULAR: `MOVIE.POPULAR`,
    TOP_RATED: `MOVIE.TOP_RATED`,
    UPCOMING: `MOVIE.UPCOMING`,
    DETAILS: `MOVIE.DETAILS`,
    SIMILAR: `MOVIE.SIMILAR`,
    WATCH_PROVIDERS: `MOVIE.WATCH_PROVIDERS`,
    RECOMMENDATIONS: `MOVIE.RECOMMENDATIONS`,
    IMAGES: `MOVIE.IMAGES`,
    VIDEO: `MOVIE.VIDEOS`,
    REVIEWS: `MOVIE.REVIEWS`,
    COLLECTION: `COLLECTION,`,
    CREDITS: `CREDITS`,
  },
  TV: {
    LATEST: `TV.LATEST`,
    AIRING_TODAY: `TV.AIRING_TODAY`,
    POPULAR: `TV.POPULAR`,
    TOP_RATED: `TV.TOP_RATED`,
    ON_THE_AIR: `TV.ON_THE_AIR`,
    DETAILS: `TV.DETAILS`,
    SIMILAR: `TV.SIMILAR`,
    WATCH_PROVIDERS: `TV.WATCH_PROVIDERS`,
    RECOMMENDATIONS: `TV.RECOMMENDATIONS`,
    IMAGES: `TV.IMAGES`,
    VIDEO: `TV.VIDEOS`,
    REVIEWS: `TV.REVIEWS`,
    SEASON_DETAILS: `SEASON_DETAILS`,
    CREDITS: `CREDITS`,
  },
  PERSON: `PERSON`,
  SEARCH: `SEARCH`,
};

export const API_ROUTES = {
  REQUEST_TOKEN: "/authentication/token/new",
  REQUEST_SESSION: "/authentication/session/new",
  REMOVE_SESSION: "/authentication/session",
  USER_DETAILS: "/account",
  FAVORITE: {
    ADD_REMOVE: "/account/{}/favorite",
    MOVIES: "/account/{}/favorite/movies",
    TV: "/account/{}/favorite/tv",
  },
  WATCHLIST: {
    ADD_REMOVE: "/account/{}/watchlist",
    MOVIES: "/account/{}/watchlist/movies",
    TV: "/account/{}/watchlist/tv",
  },
  TRENDING: "/trending",
  DISCOVER: "/discover",
  MOVIE: {
    LATEST: `/movie/latest`,
    NOW_PLAYING: `/movie/now_playing`,
    POPULAR: `/movie/popular`,
    TOP_RATED: `/movie/top_rated`,
    UPCOMING: `/movie/upcoming`,
    DETAILS: (movieId) => `/movie/${movieId}`,
    SIMILAR: (movieId) => `/movie/${movieId}/similar`,
    WATCH_PROVIDERS: (movieId) => `/movie/${movieId}/watch/providers`,
    RECOMMENDATIONS: (movieId) => `/movie/${movieId}/recommendations`,
    IMAGES: (movieId) => `/movie/${movieId}/images`,
    VIDEO: (movieId) => `/movie/${movieId}/videos`,
    REVIEWS: (movieId) => `/movie/${movieId}/reviews`,
    COLLECTION: (collectionId) => `/collection/${collectionId}`,
    CREDITS: (movieId) => `/movie/${movieId}/credits`,
  },
  TV: {
    LATEST: `/tv/latest`,
    AIRING_TODAY: `/tv/airing_today`,
    POPULAR: `/tv/popular`,
    TOP_RATED: `/tv/top_rated`,
    ON_THE_AIR: `/tv/on_the_air`,
    DETAILS: (tvId) => `/tv/${tvId}`,
    SIMILAR: (tvId) => `/tv/${tvId}/similar`,
    WATCH_PROVIDERS: (tvId) => `/tv/${tvId}/watch/providers`,
    RECOMMENDATIONS: (tvId) => `/tv/${tvId}/recommendations`,
    IMAGES: (tvId) => `/tv/${tvId}/images`,
    VIDEO: (tvId) => `/tv/${tvId}/videos`,
    REVIEWS: (tvId) => `/tv/${tvId}/reviews`,
    SEASON_DETAILS: (tvId, seasonNumber) =>
      `/tv/${tvId}/season/${seasonNumber}`,
    CREDITS: (tvId) => `/tv/${tvId}/credits`,
  },
  PERSON: (personId) => `/person/${personId}`,
  SEARCH: `/search/multi`,
};

export const IMAGE_PATH = {
  W_92: "https://image.tmdb.org/t/p/w92",
  W_154: "https://image.tmdb.org/t/p/w154",
  W_185: "https://image.tmdb.org/t/p/w185",
  W_300: "https://image.tmdb.org/t/p/w300",
  W_342: "https://image.tmdb.org/t/p/w342",
  W_500: "https://image.tmdb.org/t/p/W500",
  W_780: "https://image.tmdb.org/t/p/w780",
  W_1280: "https://image.tmdb.org/t/p/w1280",
  ORIGINAL: "https://image.tmdb.org/t/p/original",
};

export const YOUTUBE_URL = (videoKey) =>
  "https://www.youtube.com/embed/" + videoKey;

export const TRENDING_TAB_ITEMS = [
  { label: "Today", value: "day" },
  { label: "This Week", value: "week" },
];
export const DISCOVER_FREE_ITEMS = [
  { label: "Movies", value: "movie" },
  { label: "TV Shows", value: "tv" },
];

export const PersonPlaceHolder =
  "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg";

export const ImagePlaceHolder =
  "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
