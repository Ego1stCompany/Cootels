import React from "react";
import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: 'Rooms',
    },
    {
        id: 2,
        title: 'Reservation',
    },
    {
        id: 3,
        title: 'Contacs',
    }
]

const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {}
})

export default navigationSlice.reducer;
