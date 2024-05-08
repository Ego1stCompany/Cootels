import React from 'react';
import {useSelector} from "react-redux";
//components
import ButtonContactsUs from "../UI/buttonContactsUs.jsx";
import ButtonExploreRoom from "../UI/buttonExploreRoom.jsx";
import DropItemList from "./DropItemList.jsx";

const Contacts = () => {

    const DropList = useSelector(state => state.dropList.dropList);

    return (
        <section
            className={'m-auto container grid grid-cols-1 gap-16 items-center px-4 mt-20 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'}>
            <div className={'flex grow shrink basis-6/12 flex-col gap-8 justify-start'}>
                <span
                    className={'text-[#424F7B] sm:text-sm lg:text-lg xl:text-lg 2xl:text-lg'}>Start your journey!</span>
                <h1 className={'font-bold text-lg sm:text-xl lg:text-2xl xl:text-4xl 2xl:text-4xl'}>How to Get My Room?</h1>
                <p className={'text-[#848FAC] text-sm sm: text-sm lg:text-lg xl:text-lg 2xl:text-lg'}>You
                    can contact us by phone or email us. Easily tap the
                    contact
                    button below and it will take you to our contact point
                </p>

                <div className={'flex gap-8'}>
                    <ButtonContactsUs/>
                    <ButtonExploreRoom/>
                </div>
            </div>

            <div className={'grid grid-cols-1 gap-8 justify-start'}>
                {DropList.map(item => <DropItemList key={item.id} id={item.id} title={item.title} text={item.text}
                                                    active={item.active}/>)}
            </div>
        </section>
    );
};

export default Contacts;