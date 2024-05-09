import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeActiveSlider} from "../store/SliderActive.js";

const PointSlider = () => {

    const sliderListArray = useSelector(state => state.sliderList.sliderList)
    const activePoint = useDispatch()

    return (
        <div className={'flex items-center justify-center gap-2'}>
            {
                sliderListArray.map(item => item.active === true ?
                    <span key={item.id} className={'bg-amber-500 p-2 rounded-full cursor-pointer'}
                          onClick={() => activePoint(removeActiveSlider({id: item.id}))}></span>
                    :
                    <span key={item.id} className={'bg-amber-300 p-1 rounded-full  cursor-pointer'}
                          onClick={() => activePoint(removeActiveSlider({id: item.id}))}></span>
                )
            }
        </div>
    );
};

export default PointSlider;