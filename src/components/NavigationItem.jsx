import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeActive} from "../store/ActiveSlice.js";

const NavigationItem = (props) => {

    const active = useDispatch()
    const value = useSelector(state => state.active)

    return (
        <div>
            <p className={'font-medium cursor-pointer hover:text-[#0000008c] ease-in duration-300 sm:text-sm lg:text-xl xl:text-xl 2xl:text-xl'}
               onClick={() => active(removeActive({value: false}))}>
                <a href={`#${props.title}`}>{props.title}</a>
            </p>
        </div>
    );
};

export default NavigationItem;