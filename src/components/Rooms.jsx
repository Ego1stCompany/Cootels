import React from 'react';
import Cart from "./cart.jsx";
import {useSelector} from "react-redux";
//components
import ButtonExploreMore from "../UI/buttonExploreMore.jsx";

const Rooms = () => {

    const cartArray = useSelector(state => state.carts)

    return (
        <section className={'m-auto container flex flex-col gap-16 justify-center items-center mt-40 px-4'}>
            <div>
                <div className='flex flex-col gap-6 justify-center items-center'>
                    <h1 className={'font-bold text-6xl'}>
                        Many Rooms to Choose
                    </h1>
                    <p className={'text-xl w-7/12 text-center'}>
                        There is a room for every needs. We have room for individuals until family size, we also have a
                        cabin for more private experience
                    </p>

                   <ButtonExploreMore/>
                </div>
            </div>

            <div className={'flex gap-10'}>
                {cartArray.map(item => <Cart key={item.id} title={item.title} text={item.text} image={item.image}/>)}
            </div>
        </section>
    );
};

export default Rooms;