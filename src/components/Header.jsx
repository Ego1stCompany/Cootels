import React from 'react';
//components
import Navigation from "./Navigation.jsx";
import ButtonGetStarted from "../UI/buttonGetStarted.jsx";
import Logo from "../UI/Logo.jsx";

const Header = () => {
    return (
        <header className={'m-auto container flex items-center justify-between px-4 mt-8'}>
            <Logo color={'black'}/>
            <Navigation/>
           <ButtonGetStarted/>
        </header>
    );
};

export default Header;