import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeActive} from "../store/ActiveSlice.js";
//images
import close from '../assets/close.svg'

const ButtonClose = () => {

    const active = useDispatch()
    const value = useSelector(state => state.active)

    return (
        <button className={'cursor-pointer'} onClick={() => active(removeActive({value: !value.value}))}>
            <img src={close} alt={close} className={'h-4 w-4'}/>
        </button>
    );
};

export default ButtonClose;