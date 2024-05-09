import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeActive} from "../store/ActiveSlice.js";

const ButtonNavigateMobile = () => {

    const active = useDispatch()
    const value = useSelector(state => state.active)

    return (
        <div className={'flex flex-col w-6/6 gap-2 cursor-pointer sm:hidden lg:hidden xl:hidden 2xl:hidden'}
             onClick={() => active(removeActive({value: !value.value}))}>
            <span className={'w-3/3 bg-black h-3/3 px-6 py-1 rounded'}></span>
            <span className={'w-3/3 bg-black h-3/3 px-6 py-1 rounded'}></span>
            <span className={'w-3/3 bg-black h-3/3 px-6 py-1 rounded'}></span>
        </div>
    );
};

export default ButtonNavigateMobile;