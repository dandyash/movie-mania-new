import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  responseType: "json",
  params: {
    api_key: "032f0bbdf8a95e629c1a2e2c338a448b",
  },
});

export default apiClient;
