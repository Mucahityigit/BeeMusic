import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSong: [],
  currentSong: [],
  isPlaying: false,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.data;
    },
    setIsPlaying: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const { setActiveSong, setIsPlaying } = playerSlice.actions;

export default playerSlice.reducer;
