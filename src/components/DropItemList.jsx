import React from 'react';
//components
import ButtonDropList from "../UI/buttonDropList.jsx";

const DropItemList = (props) => {
    return (
        <div className={'shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] px-8 py-6  flex flex-col gap-8 rounded-lg'}>
            <div className={'flex gap-8 items-center justify-between'}>
                <p className={'text-2xl text-[#424F7B] font-bold'}>{props.title}</p>
                <ButtonDropList id={props.id} active={props.active}/>
            </div>
            <p className={`text-lg text-[#848FAC] ${props.active === false? 'hidden': ''}`}>{props.text}
                {props.text}
            </p>
        </div>
    );
};

export default DropItemList;