import { createSlice } from "@reduxjs/toolkit";

const FavouriteSongs = createSlice({
  name: "favouriteSongsList",
  initialState: {
    FavouriteSongsList: [],
  },
  reducers: {
    setFavouriteList: (state, action) => {
      if (!state.FavouriteSongsList.includes(action.payload)) {
        state.FavouriteSongsList.push(action.payload);
      }
    },
  },
});

export const { setFavouriteList } = FavouriteSongs.actions;
export default FavouriteSongs;
