import React from 'react';
//images
import arrow from '../assets/arrow-1.png'
//components
import ButtonCart from "../UI/buttonCart.jsx";

const Art = (props) => {

    return (
        <div className={'flex flex-col grow shrink gap-6 basis-4/12 h-4/4 justify-between'}>
            <img src={props.image} alt={props.image} className={'h-4/4 w-6/6'}/>
            <h2 className={'font-bold sm:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl'}>{props.title}</h2>
            <p className={'text-[#848FAC] sm:text-sm lg:text-xl xl:text-lg 2xl:text-2xl'}>{props.text}</p>
            <ButtonCart/>
        </div>
    );
};

export default Art;