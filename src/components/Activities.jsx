import React from 'react';
//images
import image_5 from '../assets/image-5.png'
import image_6 from '../assets/image-6.png'

const Activities = () => {
    return (
        <section className={'m-auto container grid grid-cols-1 mt-20 px-4 gap-10'}
        >
            <div className={'grid grid-cols-1 items-center justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'}>
                <div className={'flex flex-col basis-7/12 gap-6'}>
                    <h1 className={'font-bold text-lg sm:text-xl lg:text-4xl xl:text-6xl 2xl:text-6xl'}>
                        Cabin Activities
                    </h1>
                    <p className={'text-sm sm:text-sm lg:text-xl xl:text-xl 2xl:text-xl'}>
                        Don’t worry to get bored easily in our cabin. We have so many cabin activities for you to do it
                        alone or with group. Maybe this is the best chance for you to make new friends or even a lover.
                    </p>
                </div>

                <div className={'flex justify-end'}>
                    <img src={image_5} alt={image_5} className={'h-4/4 w-4/4'}/>
                </div>
            </div>

            <div className={'grid grid-cols-1 items-center justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'}>
                <div className={'flex basis-5/12 order-last sm:order-first lg:order-first xl:order-first 2xl:order-first'}>
                    <img src={image_6} alt={image_6} className={'h-4/4 w-4/4'}/>
                </div>

                <div className={'flex flex-col basis-7/12 gap-6'}>
                    <h1 className={'font-bold text-lg sm:text-xl lg:text-4xl xl:text-6xl 2xl:text-6xl'}>
                        100% Organic Food
                    </h1>
                    <p className={'text-sm sm:text-sm lg:text-xl xl:text-xl 2xl:text-xl '}>
                        We served 100% organic, low process and delicious food. We allow our guest to have breakfast or dinner request.What ever made your taste buds happy.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Activities;