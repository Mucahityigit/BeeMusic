import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artists: [],
  songs: [],
  albums: [],
  playlists: [],
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setFavoriteSongs: (state, action) => {
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
    },
    setFavoriteAlbums: (state, action) => {
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
    },
    setFavoriteArtists: (state, action) => {
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
    },
    setFavoritePlaylists: (state, action) => {
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
    },
  },
});

export const {
  setFavoriteSongs,
  setFavoriteAlbums,
  setFavoriteArtists,
  setFavoritePlaylists,
} = playerSlice.actions;

export default playerSlice.reducer;
