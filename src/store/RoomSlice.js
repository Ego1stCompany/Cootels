import {createSlice, createStore} from "@reduxjs/toolkit";
import image_7 from "../assets/image-7.png";
import image_8 from "../assets/image-8.png";
import image_9 from "../assets/image-9.png";

const initialState = [
    {
        id:1,
        title:'Single Room',
        image: image_7,
        text:'Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.',
    },
    {
        id:2,
        title:'Double Room',
        image:image_8,
        text:'Best for couple, seek happiness in intimacy without worry of being disturbed. Feel the whole world just for you two',
    },
    {
        id:3,
        title:'Cootage',
        image:image_9,
        text:'Best for family or group. One cootage can fit up to 5 people. Made stronger bond with your family or friends',
    },
]

const RoomSlice = createSlice({
    name: "rooms",
    initialState,
    reducers:{}
})

export default RoomSlice.reducer;

