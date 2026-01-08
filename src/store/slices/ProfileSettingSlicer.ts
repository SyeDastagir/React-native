import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    adultContent: true,
};

const SettingSlicer = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        toggleAdultContent: (state, action) => {
            state.adultContent = action.payload;
        },
    },
});

export const { toggleAdultContent } = SettingSlicer.actions;
export { SettingSlicer };