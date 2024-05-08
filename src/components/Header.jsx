import React from 'react';
//components
import Navigation from "./Navigation.jsx";
import ButtonGetStarted from "../UI/buttonGetStarted.jsx";
import Logo from "../UI/Logo.jsx";

const Header = () => {
    return (
        <header className={'m-auto container flex items-center justify-between px-4 mt-8'}>
            <Logo color={'black'} style={'hidden'}/>
            <div className={'flex flex-col w-6/6 gap-2 cursor-pointer sm:hidden lg:hidden xl:hidden 2xl:hidden'}>
                <span className={'w-3/3 bg-black h-3/3 px-6 py-1 rounded'}></span>
                <span className={'w-3/3 bg-black h-3/3 px-6 py-1 rounded'}></span>
                <span className={'w-3/3 bg-black h-3/3 px-6 py-1 rounded'}></span>
            </div>

            <Navigation/>
            <ButtonGetStarted/>
        </header>
    );
};

export default Header;