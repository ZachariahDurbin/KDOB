import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer:{
        setState: (state, action) => {
            state.origin = action.payload
        }
    }
});

export const { setState } = navSlice.actions;

//Selectors

export const selectInitialSate = (state) => state.nav.origin;

export default navSlice.reducer;