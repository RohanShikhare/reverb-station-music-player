import { createSlice } from "@reduxjs/toolkit";


const SideBar = createSlice({
    name: "sidebarSlice",
    initialState:{
        isSidebarOpen: false
    },
    reducers:{
        OpenSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        }
    }
});

export const { OpenSidebar } = SideBar.actions;
export default SideBar;