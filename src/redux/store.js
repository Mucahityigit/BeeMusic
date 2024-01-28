import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice";
import albumSlice from "./albumSlice";
import artistSlice from "./artistSlice";
import playlistSlice from "./playlistSlice";
import trackSlice from "./trackSlice";
import playerSlice from "./playerSlice";
import favoriteSlice from "./favoriteSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
  reducer: {
    token: tokenSlice,
    album: albumSlice,
    artist: artistSlice,
    playlist: playlistSlice,
    track: trackSlice,
    player: playerSlice,
    favorite: favoriteSlice,
    search: searchSlice,
  },
});
