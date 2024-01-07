import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice";
import albumSlice from "./albumSlice";
import artistSlice from "./artistSlice";
import playlistSlice from "./playlistSlice";

export const store = configureStore({
  reducer: {
    token: tokenSlice,
    album: albumSlice,
    artist: artistSlice,
    playlist: playlistSlice
  },
});
