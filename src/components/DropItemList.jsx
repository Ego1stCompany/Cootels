import React from 'react';
//components
import ButtonDropList from "../UI/buttonDropList.jsx";

const DropItemList = (props) => {
    return (
        <div className={'shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] px-8 py-6  flex flex-col gap-8 rounded-lg'}>
            <div className={'flex gap-8 items-center justify-between'}>
                <p className={'text-[#424F7B] text-sm font-bold w-2/3 sm:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl'}>{props.title}</p>
                <ButtonDropList id={props.id} active={props.active}/>
            </div>
            <p className={`text-[#848FAC] ${props.active === false? 'hidden': ''}  text-sm sm:text-sm lg:text-xl xl:text-xl 2xl:text-xl`}>{props.text}
                {props.text}
            </p>
        </div>
    );
};

export default DropItemList;