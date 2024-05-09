import React from 'react';
import {useSelector} from "react-redux";
//components
import ButtonExploreMore from "../UI/buttonExploreMore.jsx";
import Cart from "./Сart.jsx";

const Rooms = () => {

    const cartArray = useSelector(state => state.carts)

    return (
        <section className={'m-auto container grid grid-cols-1 gap-16 items-center mt-20 px-4'} id='Rooms'>
            <div className='flex flex-col gap-6 justify-center items-center'>
                <h1 className={'font-bold text-lg sm:text-xl lg:text-4xl xl:text-6xl 2xl:text-6xl'}>
                    Many Rooms to Choose
                </h1>
                <p className={'text-center text-sm sm:text-sm ld:text-lg xl:text-lg 2xl:text-xl'}>
                    There is a room for every needs. We have room for individuals until family size, we also have a
                    cabin for more private experience
                </p>

                <ButtonExploreMore/>
            </div>

            <div className={'grid grid-cols-1 gap-10 sm:text-sm sm:grid-cols-3 ld:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3'}>
                {cartArray.map(item => <Cart key={item.id} title={item.title} text={item.text} image={item.image}/>)}
            </div>
        </section>
    );
};

export default Rooms;