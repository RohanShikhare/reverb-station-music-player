import { createSlice } from "@reduxjs/toolkit";

const ActiveSong = createSlice({
  name: "activeSong",
  initialState: {
    ActiveSongState: {},    
  },
  reducers: {
    setActiveSong: (state, action) => {
      state.ActiveSongState = action.payload;
    },
  },
});

export const { setActiveSong } = ActiveSong.actions;
export default ActiveSong;
