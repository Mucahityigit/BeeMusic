import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../spotify";

const initialState = {
  artistId: "",
  artist: [],
  favoriteArtists: {},
  artistRelatedArtists: [],
};

export const getArtistById = createAsyncThunk(
  "getartistbyid",
  async (artistID) => {
    const response = await apiClient.get(`artists/${artistID}`);
    return response.data;
  }
);
export const getArtistRelatedArtists = createAsyncThunk(
  "getartistrelatedartists",
  async (artistID) => {
    const response = await apiClient.get(`artists/${artistID}/related-artists`);
    return response.data.artists;
  }
);
export const getFavoriteArtists = createAsyncThunk(
  "getfavoriteartists",
  async () => {
    const response = await apiClient.get(`me/top/artists`);
    return response.data.items;
  }
);

export const artistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    setArtistID: (state, action) => {
      state.artistId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArtistById.fulfilled, (state, action) => {
        state.artist = action.payload;
      })
      .addCase(getFavoriteArtists.fulfilled, (state, action) => {
        state.favoriteArtists = action.payload;
      })
      .addCase(getArtistRelatedArtists.fulfilled, (state, action) => {
        state.artistRelatedArtists = action.payload;
      });
  },
});

export const { setArtistID } = artistSlice.actions;

export default artistSlice.reducer;
