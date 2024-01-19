import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../spotify";

const initialState = {
  trackID: "",
  track: [],
  allTimeTopTracks: {},
  monthlyTopTracks: {},
  artistTopTracks: {},
};

export const getAllTimeTopTracks = createAsyncThunk(
  "getalltimetoptracks",
  async () => {
    const response = await apiClient.get(
      `recommendations?market=TR&seed_genres=pop&max_popularity=100`
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
      .addCase(getAllTimeTopTracks.fulfilled, (state, action) => {
        state.allTimeTopTracks = action.payload;
      })
      .addCase(getMonthlyTopTracks.fulfilled, (state, action) => {
        state.monthlyTopTracks = action.payload;
      })
      .addCase(getArtistTopTracks.fulfilled, (state, action) => {
        state.artistTopTracks = action.payload;
      })
      
  },
});

// export const { setArtistID } = trackSlice.actions;

export default trackSlice.reducer;
