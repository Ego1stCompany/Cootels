import React from 'react';
import {useDispatch} from "react-redux";
import {removeActive} from '../store/DropListSlice.js'
//images
import arrow_2 from '../assets/arrow-2.png'
import arrow_3 from '../assets/arrow-3.png'


const ButtonDropList = (props) => {

    const dispatch = useDispatch();

    return (
        <button
            className={`flex justify-center items-center transition duration-200 ease-in-out rounded-3xl ${props.active === false ? 'bg-[#FFECE2]' : 'bg-[#FF620A]'} sm:w-10 h-10 lg:w-12 h-12 xl:w-12 h-12 2xl:w-12 h-12`}
            onClick={() => dispatch(removeActive({id: props.id, active: props.active}))}
        >
            {
                props.active === false ?
                    <img src={arrow_2} alt={arrow_2} className={'h-2/4 w-2/4'}/>
                    :
                    <img src={arrow_3} alt={arrow_3} className={'h-2/4 w-2/4'}/>
            }
        </button>
    );
};

export default ButtonDropList;