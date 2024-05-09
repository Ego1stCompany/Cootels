import React from 'react';

const ButtonReservation = () => {
    return (
        <button className={'px-4 py-3 cursor-pointer bg-black rounded-lg w-1/3 hover:bg-gray-500 ease-in duration-300  sm:w-2/4 lg:w-1/3 xl:w-1/4 2xl:w-1/4'}>
            <span className={'text-white font-medium text-sm sm:text-sm lg:text-xl xl:text-xl 2xl:text-xl'}>Reservation</span>
        </button>
    );
};

export default ButtonReservation;