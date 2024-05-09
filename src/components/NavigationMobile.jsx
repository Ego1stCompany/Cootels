import React from 'react';
import Logo from "../UI/Logo.jsx";
import {useSelector} from "react-redux";
//components
import NavigationItem from "./NavigationItem.jsx";
import ButtonClose from "../UI/buttonClose.jsx";

const NavigationMobile = (props) => {

    const navigationArray = useSelector(state => state.navigation);

    return (
        <nav
            className={'absolute top-0 left-0 w-full z-50 bg-white shadow-lg grid grid-cols-1 justify-items-center gap-6 py-4'}>
            <div className={'w-full flex justify-end px-4'}>
                <ButtonClose/>
            </div>

            <Logo/>

            <div className={'grid grid-cols-1 gap-5 justify-items-center'}>
                {
                    navigationArray.map(item => (
                        <NavigationItem key={item.id} title={item.title}/>
                    ))
                }
            </div>
        </nav>
    );
};

export default NavigationMobile;