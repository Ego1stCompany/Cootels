import React from 'react';

const SliderCart = (props) => {
    return (
        <div className='grid grid-cols-1 gap-10 justify-items-center'>
            <img src={props.image} alt={props.image}/>

            <p className={'w-10/12 text-center text-[#848FAC] text-sm sm:text-sm w-6/12 lg:text-lg w-6/12 xl:text-xl w-6/12 2xl:text-xl w-6/12'}>
                {props.text}
            </p>

            <span className={'font-bold text-black sm:text-sm lg:text-lg xl:text-lg 2xl:text-lg'}>{props.name}</span>
        </div>
    );
};

export default SliderCart;