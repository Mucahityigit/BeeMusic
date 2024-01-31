import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../spotify";

const initialState = {
  trackResults: {},
  albumResults: {},
  artistResults: {},
  playlistResults: {},
};

export const getTracksByQuery = createAsyncThunk(
  "gettracksbyquery",
  async (query) => {
    const response = await apiClient.get(
      `search?query=${query}&type=track&offset=0&limit=3`
    );
    return response.data.tracks.items;
  }
);
export const getAlbumsByQuery = createAsyncThunk(
  "getalbumsbyquery",
  async (query) => {
    const response = await apiClient.get(
      `search?query=${query}&type=album&offset=0&limit=3`
    );
    return response.data.albums.items;
  }
);
export const getArtistsByQuery = createAsyncThunk(
  "getartistsbyquery",
  async (query) => {
    const response = await apiClient.get(
      `search?query=${query}&type=artist&offset=0&limit=3`
    );
    return response.data.artists.items;
  }
);
export const getPlaylistsByQuery = createAsyncThunk(
  "getplaylistsbyquery",
  async (query) => {
    const response = await apiClient.get(
      `search?query=${query}&type=playlist&offset=0&limit=3`
    );
    return response.data.playlists.items;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTracksByQuery.fulfilled, (state, action) => {
        state.trackResults = action.payload;
      })
      .addCase(getAlbumsByQuery.fulfilled, (state, action) => {
        state.albumResults = action.payload;
      })
      .addCase(getArtistsByQuery.fulfilled, (state, action) => {
        state.artistResults = action.payload;
      })
      .addCase(getPlaylistsByQuery.fulfilled, (state, action) => {
        state.playlistResults = action.payload;
      });
  },
});

// export const { setArtistID } = searchSlice.actions;

export default searchSlice.reducer;
