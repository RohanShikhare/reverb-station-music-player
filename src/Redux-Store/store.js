import { configureStore } from "@reduxjs/toolkit";
import mode from "./slices/SelectMode";
import SideBar from "./slices/SideBarSlice";
import TrendingSlice from "./slices/TrendingSlice";
import ActiveSong from "./slices/ActiveSong";
import RecentlyPlayed from "./slices/RecentlyPlayed";
import FavouriteSongs from "./slices/FavouriteSongs";

const mainStore = configureStore({
    reducer: {
        mode: mode.reducer,
        sidebar: SideBar.reducer,
        trending: TrendingSlice.reducer,
        active: ActiveSong.reducer,
        recent: RecentlyPlayed.reducer,
        favourite: FavouriteSongs.reducer,
    }
});

export default mainStore;