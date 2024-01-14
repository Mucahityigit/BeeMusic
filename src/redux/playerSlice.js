import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSong: {},
  currentSongs: [],
  currentIndex: 0,
  isPlaying: false,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.track;
      state.currentSongs = action.payload.data;
      state.currentIndex = action.payload.index;
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    nextSong: (state) => {
      if (state.currentIndex + 1 > state.currentSongs.length - 1) {
        state.currentIndex = 0;
        state.activeSong = state.currentSongs[state.currentIndex];
      } else {
        state.activeSong = state.currentSongs[state.currentIndex + 1];
        state.currentIndex = state.currentIndex + 1;
      }
    },
    prevSong: (state) => {
      if (state.currentIndex - 1 < 0) {
        state.currentIndex = state.currentSongs.length - 1;
        state.activeSong = state.currentSongs[state.currentIndex];
      } else {
        state.activeSong = state.currentSongs[state.currentIndex - 1];
        state.currentIndex = state.currentIndex - 1;
      }
    },
  },
});

export const { setActiveSong, setIsPlaying, nextSong, prevSong } =
  playerSlice.actions;

export default playerSlice.reducer;
