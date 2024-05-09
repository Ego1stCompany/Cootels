import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value:false
}

const activeSlice  = createSlice({
    name: "active",
    initialState,
    reducers: {
        removeActive: (state, action) => {
            state.value = action.payload.value
        }
    }
})

export default activeSlice.reducer

export const {removeActive} = activeSlice.actions;