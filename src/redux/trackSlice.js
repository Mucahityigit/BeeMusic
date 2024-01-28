import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../spotify";

const initialState = {
  trackID: "",
  track: [],
  categoryTracks: {},
  genres: [],
  allTimeTopTracks: {},
  monthlyTopTracks: {},
  artistTopTracks: {},
  recommendedTracks: {},
};

export const getGenres = createAsyncThunk("getgenres", async () => {
  const response = await apiClient.get(`recommendations/available-genre-seeds`);
  return response.data.genres;
});

export const getTrackById = createAsyncThunk("gettrackbyid", async (id) => {
  const response = await apiClient.get(`tracks/${id}`);
  return response.data;
});
export const getTrackByCategory = createAsyncThunk(
  "gettrackbycategory",
  async (genre) => {
    const response = await apiClient.get(
      `recommendations?limit=24&seed_genres=${genre}&min_popularity=50`
    );
    return response.data.tracks;
  }
);
export const getRecommendedTracksById = createAsyncThunk(
  "getrecommendedtracksbyid",
  async (id) => {
    const response = await apiClient.get(
      `recommendations?market=TR&seed_tracks=${id}&min_popularity=50`
    );
    return response.data.tracks;
  }
);
export const getAllTimeTopTracks = createAsyncThunk(
  "getalltimetoptracks",
  async () => {
    const response = await apiClient.get(
      `recommendations?market=TR&seed_genres=pop&min_popularity=50`
    );
    return response.data.tracks;
  }
);
export const getMonthlyTopTracks = createAsyncThunk(
  "getmonthlytoptracks",
  async () => {
    const response = await apiClient.get(`me/top/tracks?time_range=short_term`);
    return response.data.items;
  }
);

export const getArtistTopTracks = createAsyncThunk(
  "getartisttoptracks",
  async (artistID) => {
    const response = await apiClient.get(
      `artists/${artistID}/top-tracks?market=TR`
    );
    return response.data.tracks;
  }
);

export const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
      })
      .addCase(getTrackById.fulfilled, (state, action) => {
        state.track = action.payload;
      })
      .addCase(getTrackByCategory.fulfilled, (state, action) => {
        state.categoryTracks = action.payload;
      })
      .addCase(getAllTimeTopTracks.fulfilled, (state, action) => {
        state.allTimeTopTracks = action.payload;
      })
      .addCase(getMonthlyTopTracks.fulfilled, (state, action) => {
        state.monthlyTopTracks = action.payload;
      })
      .addCase(getArtistTopTracks.fulfilled, (state, action) => {
        state.artistTopTracks = action.payload;
      })
      .addCase(getRecommendedTracksById.fulfilled, (state, action) => {
        state.recommendedTracks = action.payload;
      });
  },
});

// export const { setArtistID } = trackSlice.actions;

export default trackSlice.reducer;
