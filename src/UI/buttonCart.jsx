import React from 'react';
//images
import arrow from '../assets/arrow-1.png'

const ButtonCart = () => {
    return (
        <button className={'flex items-center justify-start cursor-pointer gap-6 sm:w-3/3 lg:w-3/3 xl:w-2/3 2xl:w-1/3'}>
            <span className={'text-[#424F7B] text-xl hover:text-black ease-in duration-300'}>Learn more</span>
            <img src={arrow} alt={arrow}/>
        </button>
    );
};

export default ButtonCart;