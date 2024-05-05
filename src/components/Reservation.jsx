import React from 'react';
//images
import image_1 from '../assets/image-1.png'
import image_2 from '../assets/image-2.png'
import image_3 from '../assets/image-3.png'
//components
import ButtonReservation from "../UI/buttonReservation.jsx";

const Reservation = () => {
    return (
        <section className={'m-auto container flex mt-40 items-center px-4 gap-10'}
        >
            <div className={'flex flex-col basis-6/12 gap-10 shrink'}>
                <h1 className={'font-bold lg:text-4xl xl:text-6xl 2xl:text-6xl'}>
                    Nature, Warmth, and Beauty in One Space
                </h1>
                <p className={'text-xl lg:w-3/3 xl:w-2/3 2xl:w-2/3'}>
                    One place to release all the stress, bring back happines, and get back to nature. We provide the
                    best room and nature for you. Come visit us anytime you want.
                </p>
                <ButtonReservation/>
            </div>

            <div className={'flex basis-6/12  gap-4 justify-between shrink grow'}>
                <img src={image_1} alt={image_1} className={'h-2/4 lg:w-[30%] xl:w-2/6 2xl:w-2/6'}/>
                <img src={image_2} alt={image_2} className={'h-2/4 pt-32 lg:w-[30%] xl:w-2/6 2xl:w-2/6'}/>
                <img src={image_3} alt={image_3} className={'h-2/4 lg:w-[30%] xl:w-2/6 2xl:w-2/6'}/>
            </div>
        </section>
    );
};

export default Reservation;