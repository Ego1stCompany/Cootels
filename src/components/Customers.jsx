import React from 'react';
//images
import user from '../assets/user.png'

const Customers = () => {
    return (
        <section className={'m-auto container grid grid-cols-1 px-4 sm:mt-20 lg:mt-40 xl:mt-40 2xl:mt-40'}>
            <div className='grid grid-cols-1 gap-10 justify-items-center'>
                <h1 className={'font-bold sm:text-lg lg:text-2xl xl:text-4xl 2xl:text-4xl'}>
                    Hear From Our Happy Customers
                </h1>

                <img src={user} alt={user}/>

                <p className={'w-6/12 text-center text-[#848FAC] sm:text-sm lg:text-lg xl:text-xl 2xl:text-xl'}>
                    “Great service, great food, great people. The scenery is also beautiful,
                    you can do so much activity even with your famility.
                    Worth every penny! you should come and see for your self. 5 out of 5! the waffle is great!”
                </p>
            </div>
        </section>
    );
};

export default Customers;