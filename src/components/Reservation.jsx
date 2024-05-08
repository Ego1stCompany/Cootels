import React from 'react';
//images
import image_1 from '../assets/image-1.png'
import image_2 from '../assets/image-2.png'
import image_3 from '../assets/image-3.png'
//components
import ButtonReservation from "../UI/buttonReservation.jsx";

const Reservation = () => {
    return (
        <section
            className={'m-auto container grid grid-cols-1 items-center px-4 gap-10 mt-20 sm:grid-cols-2  lg:grid-cols-2 xl:grid-cols-2  2xl:grid-cols-2 '}
        >
            <div className={'flex flex-col items-center gap-10 sm:gap-8 lg:gap-10 xl:gap-10 2xl:gap-10'}>
                <h1 className={'font-bold text-xl sm:text-xl lg:text-4xl xl:text-6xl 2xl:text-6xl'}>
                    Nature, Warmth, and Beauty in One Space
                </h1>
                <p className={'text-sm sm:text-sm lg:text-xl xl:text-xl 2xl:text-xl'}>
                    One place to release all the stress, bring back happines, and get back to nature. We provide the
                    best room and nature for you. Come visit us anytime you want.
                </p>
                <ButtonReservation/>
            </div>

            <div className={'flex gap-4 justify-between'}>
                <img src={image_1} alt={image_1} className={'h-2/4 w-[30%] sm:w-[30%] lg:w-[30%] xl:w-2/6 '}/>
                <img src={image_2} alt={image_2}
                     className={'h-2/4 pt-20 w-[30%] sm:pt-20 w-[30%] lg:w-[30%] xl:w-2/6 2xl:w-2/6'}/>
                <img src={image_3} alt={image_3} className={'h-2/4 w-[30%] sm:w-[30%] lg:w-[30%] xl:w-2/6 2xl:w-2/6'}/>
            </div>
        </section>
    );
};

export default Reservation;