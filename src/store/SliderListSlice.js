import {createSlice} from '@reduxjs/toolkit';
import user from '../assets/user.png'

const sliderList = [
    {
        id: 1,
        image: user,
        text: '“Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self. 5 out of 5! the waffle is great!”',
        name: 'Kirana Dunham 1',
        active: false,
    },
    {
        id: 2,
        image: user,
        text: '“Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self. 5 out of 5! the waffle is great!”',
        name: 'Kirana Dunham 2',
        active: true,
    },
    {
        id: 3,
        image: user,
        text: '“Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self. 5 out of 5! the waffle is great!”',
        name: 'Kirana Dunham 3',
        active: false,
    },
    {
        id: 4,
        image: user,
        text: '“Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self. 5 out of 5! the waffle is great!”',
        name: 'Kirana Dunham 4',
        active: false,
    }
]

const sliderListSlice = createSlice({
    name: "sliderList",
    initialState: {
        sliderList: sliderList,
    },
    reducers: {
        removeActiveSlider: (state, action) => {
            state.sliderList.map(item => item.id === action.payload.id ?  item.active = true :  item.active = false)
        }
    }
})

export const {removeActiveSlider} = sliderListSlice.actions;

export default sliderListSlice.reducer
