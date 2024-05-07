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
            className={'m-auto container flex gap-16 items-center mt-40 px-4 sm:mt-20 lg:mt-40 xl:mt-40 2xl:mt-40'}>
            <div className={'flex grow shrink basis-6/12 flex-col gap-8 justify-start'}>
                <span
                    className={'text-[#424F7B] sm:text-sm lg:text-lg xl:text-lg 2xl:text-lg'}>Start your journey!</span>
                <h1 className={'font-bold sm:text-xl lg:text-2xl xl:text-4xl 2xl:text-4xl'}>How to Get My Room?</h1>
                <p className={'text-[#848FAC] sm: w-6/6 text-sm lg:text-lg  w-5/6 xl:text-lg w-5/6 2xl:text-lg  w-5/6'}>You
                    can contact us by phone or email us. Easily tap the
                    contact
                    button below and it will take you to our contact point
                </p>

                <div className={'flex gap-8'}>
                    <ButtonContactsUs/>
                    <ButtonExploreRoom/>
                </div>
            </div>

            <div className={'flex grow shrink basis-6/12 flex-col gap-8 justify-start'}>
                {DropList.map(item => <DropItemList key={item.id} id={item.id} title={item.title} text={item.text}
                                                    active={item.active}/>)}
            </div>
        </section>
    );
};

export default Contacts;