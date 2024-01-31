import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = "10c60b20f6614a7d85b2b3b19fcee73d";
const redirectUri = "https://bee-music-xi.vercel.app/";

const scopes = [
  "user-library-read",
  "playlist-read-private",
  "user-read-playback-position",
  "user-read-recently-played",
  "user-read-private",
  "user-top-read",
];

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;
