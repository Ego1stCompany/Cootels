import React from 'react';

const ButtonGetStarted = () => {
    return (
        <button className={'px-4 py-3 cursor-pointer bg-black rounded-lg hover:bg-gray-500 ease-in duration-300'}>
            <span className={'text-white font-medium sm:text-sm lg:text-xl xl:text-xl 2xl:text-xl'}>Get Started</span>
        </button>
    );
};

export default ButtonGetStarted;