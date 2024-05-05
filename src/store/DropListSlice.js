import {createSlice} from '@reduxjs/toolkit';

const dropList = [
    {
        id: 1,
        active:false,
        title:'1. Choose a room and date',
        text:'Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.'
    },
    {
        id: 2,
        active:false,
        title:'2. Check for room availability',
        text:'Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.'
    },
    {
        id: 3,
        active:false,
        title:'3. Enjoy your room',
        text:'Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.'
    }
]

const dropListSlice = createSlice({
    name: "dropList",
    initialState:{
        dropList:dropList
    },
    reducers: {
        removeActive(state, action) {
            state.dropList.map(item => item.id === action.payload.id ? item.active = !action.payload.active : false)
        }
    }
})

export const {removeActive} = dropListSlice.actions;

export default dropListSlice.reducer;