import React from 'react';
//images
import arrow from '../assets/arrow-1.png'

const ButtonCart = () => {
    return (
        <button className={'flex items-center justify-start cursor-pointer gap-6 w-1/3'}>
            <span className={'text-[#424F7B] text-xl'}>Learn more</span>
            <img src={arrow} alt={arrow}/>
        </button>
    );
};

export default ButtonCart;