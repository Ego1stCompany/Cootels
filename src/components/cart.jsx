import React from 'react';
//images
import arrow from '../assets/arrow-1.png'
//components
import ButtonCart from "../UI/buttonCart.jsx";

const Cart = (props) => {

    return (
        <div className={'flex flex-col basis-4/12 grow shrink gap-6'}>
            <img src={props.image} alt={props.image} className={'h-4/4 w-6/6'}/>
            <h2 className={'text-2xl font-bold'}>{props.title}</h2>
            <p className={'text-lg text-[#848FAC]'}>{props.text}</p>
            <ButtonCart/>
        </div>
    );
};

export default Cart;