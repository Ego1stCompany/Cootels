import React from 'react';
//images
import image_4 from '../assets/image-4.png'
//components
import ButtonLearnMore from "../UI/buttonLearnMore.jsx";

const Learn = () => {
    return (
        <section className={'m-auto container flex  mt-40 items-center px-4 gap-10 justify-start'}
        >
            <div className={'flex basis-4/12'}>
                <img src={image_4} alt={image_4} className={'h-2/4 w-4/4'}/>
            </div>

            <div className={'flex flex-col basis-8/12 gap-10'}>
                <h1 className={'font-bold lg:text-4xl xl:text-6xl 2xl:text-6xl'}>
                    Cozy and Down to Earth Cootage Hotel in Norway.
                </h1>
                <p className={'text-xl lg:w-6/6 xl:w-5/6 2xl:w-5/6'}>
                    Our Cootage Hotel is an intimate hideway concieved for dicerning travelers. It faces directly the
                    unique and spectacular panorama of the Hallerbos Jungle.
                </p>
                <p className={'text-xl lg:w-6/6 xl:w-5/6 2xl:w-5/6'}>
                    Cootels extends along a private, quiet, and beautiful nature. Stay away from crowd and enjoy the
                    cozy and beauty with us.
                </p>
               <ButtonLearnMore/>
            </div>
        </section>
    );
};

export default Learn;