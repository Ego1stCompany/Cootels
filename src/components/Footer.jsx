import React from 'react';
import {useSelector} from "react-redux";
//components
import ButtonTwitter from "../UI/buttonTwitter.jsx";
import ButtonFacebook from "../UI/buttonFacebook.jsx";
import ButtonInstagram from "../UI/buttonInstagram.jsx";
import Logo from "../UI/Logo.jsx";

const Footer = () => {

    const footerList = useSelector(state => state.footerList);

    return (
        <footer className={'bg-[#0B265A] py-20 grid grid-cols-1 mt-20'}>
            <div className={'m-auto container grid grid-cols-1 px-4 gap-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'}>
                <div className={'flex justify-start gap-6 flex-col'}>
                    <Logo color={'white'}/>

                    <p className={'text-gray-400 w-8/12 text-sm sm:text-sm lg:text-lg xl:text-lg 2xl:text-lg'}>
                        Your Best Private Hideway From Crowd. Back to Nature.
                    </p>

                    <div className={'flex gap-6'}>
                        <ButtonTwitter/>
                        <ButtonFacebook/>
                        <ButtonInstagram/>
                    </div>
                </div>

                <div className={'grid gap-10 grid-cols-3'}>
                    {
                        footerList.map((list, index) => {
                            return (
                                <ul key={index}>
                                    {
                                        list.map((item,index) => {
                                            if (item.title) {
                                                return <li key={index} className={'text-white font-bold text-lg sm:text-lg lg:text-lg xl:text-lg 2xl:text-lg'}>{item.title}</li>
                                            }
                                            return <li key={index} className={'text-white text-sm cursor-pointer transition hover:text-gray-400 ease-in sm:text-sm lg:text-lg xl:text-lg 2xl:text-lg'}>{item.text}</li>
                                        })
                                    }
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        </footer>
    );
};

export default Footer;