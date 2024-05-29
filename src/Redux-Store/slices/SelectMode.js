import { createSlice } from "@reduxjs/toolkit";


const mode = createSlice({
    name: "modeSlice",
    initialState:{
        selectedMode: "night"
    },
    reducers:{
        setSelectedMode: (state,action) => {
            state.selectedMode = action.payload;
        }
    }
});

export const { setSelectedMode } = mode.actions;
export default mode;