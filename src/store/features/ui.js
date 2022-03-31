import { createSlice } from "@reduxjs/toolkit";


export const uiSlice = createSlice({
    name: "ui",
    initialState: {
        loader: false,
    },
    reducers: {
        setLoader: (state, {payload}) => {
            state.loader = payload;
        },
    }

  });

export const { setLoader } = uiSlice.actions;

export default uiSlice.reducer;