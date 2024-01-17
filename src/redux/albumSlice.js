import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../spotify";

const initialState = {
  newReleasesAlbum: [],
  listenedAlbumID: "",
  listenedAlbum: [],
  artistAlbums: [],
};

export const getNewReleasesAlbum = createAsyncThunk(
  "getnewreleasesalbum",
  async () => {
    const response = await apiClient.get(`browse/new-releases`);
    return response.data.albums.items;
  }
);

export const getListenedAlbum = createAsyncThunk(
  "getlistenedalbum",
  async (id) => {
    const response = await apiClient.get(`albums/${id}`);
    return response.data;
  }
);

export const getArtistAlbums = createAsyncThunk(
  "getartistalbums",
  async (id) => {
    const response = await apiClient.get(`artists/${id}/albums`);
    return response.data.items;
  }
);

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewReleasesAlbum.fulfilled, (state, action) => {
        state.newReleasesAlbum = action.payload[0];
        state.listenedAlbumID = action.payload[19].id;
      })
      .addCase(getListenedAlbum.fulfilled, (state, action) => {
        state.listenedAlbum = action.payload;
      })
      .addCase(getArtistAlbums.fulfilled, (state, action) => {
        state.artistAlbums = action.payload;
      });
  },
});

// export const { setToken } = albumSlice.actions;

export default albumSlice.reducer;
