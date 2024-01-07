import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../spotify";

const initialState = {
    newReleasesAlbum: [],
};

export const getNewReleasesAlbum = createAsyncThunk(
    "getnewreleasesalbum",
    async () => {
      const response = await apiClient.get(`browse/new-releases`);
      return response.data.albums.items[0];
    }
  );

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewReleasesAlbum.fulfilled, (state, action) => {
        state.newReleasesAlbum = action.payload;
      })
  },
});

// export const { setToken } = albumSlice.actions;

export default albumSlice.reducer;
