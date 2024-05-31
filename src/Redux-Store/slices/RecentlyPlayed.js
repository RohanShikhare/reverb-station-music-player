import { createSlice } from "@reduxjs/toolkit";

const RecentlyPlayed = createSlice({
  name: "recentlyPlayedSong",
  initialState: {
    RecentlyPlayedSongs: [],
  },
  reducers: {
    setRecentlyPlayed: (state, action) => {
      if (!state.RecentlyPlayedSongs.includes(action.payload)) {
        state.RecentlyPlayedSongs.push(action.payload);
      }
    },
  },
});

export const { setRecentlyPlayed } = RecentlyPlayed.actions;
export default RecentlyPlayed;
