import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artists: [],
  songs: [],
  albums: [],
  playlists: [],
};

export const favoriteSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      if (action.payload.type === "track") {
        const existingSongIndex = state.songs.findIndex(
          (song) => song.id === action.payload.id
        );

        if (existingSongIndex !== -1) {
          // Şarkı zaten dizide varsa, çıkart
          state.songs = state.songs.filter(
            (song) => song.id !== action.payload.id
          );
        } else {
          // Şarkı dizide yoksa, ekle
          state.songs.push(action.payload);
        }
      } else if (action.payload.type === "artist") {
        const existingArtistIndex = state.artists.findIndex(
          (artist) => artist.id === action.payload.id
        );

        if (existingArtistIndex !== -1) {
          // Şarkı zaten dizide varsa, çıkart
          state.artists = state.artists.filter(
            (artist) => artist.id !== action.payload.id
          );
        } else {
          // Şarkı dizide yoksa, ekle
          state.artists.push(action.payload);
        }
      } else if (action.payload.type === "playlist") {
        const existingPlaylistIndex = state.playlists.findIndex(
          (playlist) => playlist.id === action.payload.id
        );

        if (existingPlaylistIndex !== -1) {
          // Şarkı zaten dizide varsa, çıkart
          state.playlists = state.playlists.filter(
            (playlist) => playlist.id !== action.payload.id
          );
        } else {
          // Şarkı dizide yoksa, ekle
          state.playlists.push(action.payload);
        }
      } else {
        const existingAlbumIndex = state.albums.findIndex(
          (album) => album.id === action.payload.id
        );

        if (existingAlbumIndex !== -1) {
          // Şarkı zaten dizide varsa, çıkart
          state.albums = state.albums.filter(
            (album) => album.id !== action.payload.id
          );
        } else {
          // Şarkı dizide yoksa, ekle
          state.albums.push(action.payload);
        }
      }
    },
  },
});

export const { setFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
