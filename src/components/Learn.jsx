import React from 'react';
//images
import image_4 from '../assets/image-4.png'
//components
import ButtonLearnMore from "../UI/buttonLearnMore.jsx";

const Learn = () => {
    return (
        <section className={'m-auto container grid mt-40 items-center px-4 gap-10 justify-start sm:grid-cols-2 mt-20 lg:grid-cols-2 mt-40 xl:grid-cols-2 mt-40 2xl:grid-cols-2 mt-40'}
        >
            <div className={'flex'}>
                <img src={image_4} alt={image_4} className={'h-2/4 w-4/4'}/>
            </div>

            <div className={'flex flex-col gap-10 sm:gap-6 lg:gap-10 xl:gap-10 2xl:gap-10'}>
                <h1 className={'font-bold sm:text-xl lg:text-4xl xl:text-6xl 2xl:text-6xl'}>
                    Cozy and Down to Earth Cootage Hotel in Norway.
                </h1>
                <p className={'sm:text-sm lg:text-xl w-6/6 xl:text-xl  2xl:text-xl w-5/6 '}>
                    Our Cootage Hotel is an intimate hideway concieved for dicerning travelers. It faces directly the
                    unique and spectacular panorama of the Hallerbos Jungle.
                </p>
                <p className={'sm:text-sm lg:text-xl w-6/6 xl:text-xl  2xl:text-xl w-5/6'}>
                    Cootels extends along a private, quiet, and beautiful nature. Stay away from crowd and enjoy the
                    cozy and beauty with us.
                </p>
               <ButtonLearnMore/>
            </div>
        </section>
    );
};

export default Learn;