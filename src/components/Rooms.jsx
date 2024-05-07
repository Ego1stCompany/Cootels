import React from 'react';
import Art from "./Сart.jsx";
import {useSelector} from "react-redux";
//components
import ButtonExploreMore from "../UI/buttonExploreMore.jsx";

const Rooms = () => {

    const cartArray = useSelector(state => state.carts)

    return (
        <section className={'m-auto container flex flex-col gap-16 justify-center items-center mt-40 px-4 sm:mt-20 gap-10'}>
            <div>
                <div className='flex flex-col gap-6 justify-center items-center'>
                    <h1 className={'font-bold sm:text-xl lg:text-4xl xl:text-6xl 2xl:text-6xl'}>
                        Many Rooms to Choose
                    </h1>
                    <p className={'text-center sm:text-sm w-8/12 xl:text-lg 2xl:text-xl'}>
                        There is a room for every needs. We have room for individuals until family size, we also have a
                        cabin for more private experience
                    </p>

                   <ButtonExploreMore/>
                </div>
            </div>

            <div className={'flex sm:gap-10 lg:gap-16 xl:gap-10 2xl:gap-10'}>
                {cartArray.map(item => <Art key={item.id} title={item.title} text={item.text} image={item.image}/>)}
            </div>
        </section>
    );
};

export default Rooms;