import { configureStore } from "@reduxjs/toolkit";
import mode from "./slices/SelectMode";
import SideBar from "./slices/SideBarSlice";
import TrendingSlice from "./slices/TrendingSlice";

const mainStore = configureStore({
    reducer: {
        mode: mode.reducer,
        sidebar: SideBar.reducer,
        trending: TrendingSlice.reducer,
    }
});

export default mainStore;