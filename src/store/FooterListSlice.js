import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    [
        {
            id: 1,
            title: 'Rooms',
        },
        {
            id: 2,
            text:'Single Room'
        },
        {
            id: 3,
            text:'Single Room'
        },
        {
            id: 4,
            text:'Double Room'
        },
        {
            id:5,
            text:'Cabin'
        },
        {
            id: 6,
            text:'Custom Room'
        }
    ],
    [
        {
            id: 1,
            title: 'Reservation',
        },
        {
            id: 2,
            text:'See the Steps'
        },
        {
            id: 3,
            text:'Best Time'
        }
    ],
    [
        {
            id: 1,
            title: 'Contact',
        },
        {
            id: 2,
            text:'Our Number'
        },
        {
            id: 3,
            text:'Our Email'
        },
        {
            id: 4,
            text:'Cabin'
        },
        {
            id: 5,
            text: 'Our Location'
        }
    ],
]

const footerListSlice = createSlice({
    name: "FooterList",
    initialState,
    reducers:{}
})

export default footerListSlice.reducer