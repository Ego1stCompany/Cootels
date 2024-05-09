import React from 'react';
//components
import Logo from "../UI/Logo.jsx";
import Navigation from "./Navigation.jsx";
import ButtonGetStarted from "../UI/buttonGetStarted.jsx";
import ButtonNavigateMobile from "../UI/buttonNavigateMobile.jsx";
import NavigationMobile from "./NavigationMobile.jsx";
import {useSelector} from "react-redux";

const Header = () => {

    const value = useSelector(state => state.active);

    return (
        <header className={'m-auto container flex items-center justify-between px-4 mt-8'}>
            <Logo color={'black'} style={'hidden'}/>
            <ButtonNavigateMobile/>
            {value.value === true ? <NavigationMobile/> : ''}
            <Navigation/>
            <ButtonGetStarted/>
        </header>
    );
};

export default Header;