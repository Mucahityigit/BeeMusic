import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../spotify";

const initialState = {
  playlistId: "",
  favoritePlaylists:{}
};


export const getFavoritePlaylists = createAsyncThunk(
  "getfavoriteplaylists",
  async () => {
    const response = await apiClient.get(`browse/featured-playlists`);
    return response.data.playlists.items;
  }
);


export const playlistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavoritePlaylists.fulfilled, (state, action) => {
        state.favoritePlaylists = action.payload;
      })
  },
});

// export const { setArtistID } = playlistSlice.actions;

export default playlistSlice.reducer;
