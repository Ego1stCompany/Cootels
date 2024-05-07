import React from 'react';
//images
import image_1 from '../assets/image-1.png'
import image_2 from '../assets/image-2.png'
import image_3 from '../assets/image-3.png'
//components
import ButtonReservation from "../UI/buttonReservation.jsx";

const Reservation = () => {
    return (
        <section className={'m-auto container grid items-center px-4 gap-10 sm:grid-cols-2 mt-20 lg:grid-cols-2 mt-40 xl:grid-cols-2 mt-40 2xl:grid-cols-2 mt-40'}
        >
            <div className={'flex flex-col  shrink sm:gap-8 lg:gap-10 xl:gap-10 2xl:gap-10'}>
                <h1 className={'font-bold sm:text-xl lg:text-4xl xl:text-6xl 2xl:text-6xl'}>
                    Nature, Warmth, and Beauty in One Space
                </h1>
                <p className={'sm:text-sm lg:text-xl xl:text-xl 2xl:text-xl'}>
                    One place to release all the stress, bring back happines, and get back to nature. We provide the
                    best room and nature for you. Come visit us anytime you want.
                </p>
                <ButtonReservation/>
            </div>

            <div className={'flex gap-4 justify-between'}>
                <img src={image_1} alt={image_1} className={'h-2/4 sm:w-[30%] lg:w-[30%] xl:w-2/6 '}/>
                <img src={image_2} alt={image_2} className={'h-2/4 pt-32 sm:pt-20 w-[30%] lg:w-[30%] xl:w-2/6 2xl:w-2/6'}/>
                <img src={image_3} alt={image_3} className={'h-2/4 sm:w-[30%] lg:w-[30%] xl:w-2/6 2xl:w-2/6'}/>
            </div>
        </section>
    );
};

export default Reservation;