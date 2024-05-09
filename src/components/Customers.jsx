import React from 'react';
import {useSelector} from "react-redux";
//components
import SliderCart from "./SliderCart.jsx";
import PointSlider from "./PointSlider.jsx";

const Customers = () => {

    const sliderListArray = useSelector(state => state.sliderList.sliderList)

    return (
        <section className={'m-auto container grid grid-cols-1 justify-items-center px-4 mt-20 gap-4 '}>

            <h1 className={'font-bold sm:text-lg lg:text-2xl xl:text-4xl 2xl:text-4xl'}>
                Hear From Our Happy Customers
            </h1>

            <div className={'flex gap-6 overflow-hidden'}>
                {
                    sliderListArray.map(item => item.active === true ?
                        <SliderCart key={item.id} name={item.name} text={item.text} image={item.image}/>
                        :
                        ''
                    )
                }
            </div>

            <PointSlider/>
        </section>
    );
};

export default Customers;