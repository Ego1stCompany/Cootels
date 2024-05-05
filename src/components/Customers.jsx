import React from 'react';
//images
import user from '../assets/user.png'

const Customers = () => {
    return (
        <section className={'m-auto container flex justify-center items-center mt-40 px-4'}>
            <div>
                <div className='flex flex-col gap-10 justify-center items-center'>
                    <h1 className={'font-bold text-4xl'}>
                        Hear From Our Happy Customers
                    </h1>

                    <img src={user} alt={user} />

                    <p className={'text-xl w-6/12 text-center text-[#848FAC]'}>
                        “Great service, great food, great people. The scenery is also beautiful,
                        you can do so much activity even with your famility.
                        Worth every penny! you should come and see for your self.  5 out of 5! the waffle is great!”
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Customers;