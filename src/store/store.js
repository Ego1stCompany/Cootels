import {configureStore} from '@reduxjs/toolkit'
//reducers
import roomsReducer from './RoomSlice.js'
import navigationReducer from './NavigationSlice.js'
import dropListSlice from "./DropListSlice.js";
import footerListNavigation from "./FooterListSlice.js";
import sliderListSlice from "./SliderListSlice.js";
import activeSlice from "./ActiveSlice.js";

export const store = configureStore({
    reducer: {
        carts: roomsReducer,
        navigation: navigationReducer,
        dropList: dropListSlice,
        footerList: footerListNavigation,
        sliderList:sliderListSlice,
        active: activeSlice
    }
})