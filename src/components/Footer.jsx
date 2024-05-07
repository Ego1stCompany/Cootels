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
        <footer className={'bg-[#0B265A] py-20 sm:mt-20 lg:mt-40 xl:mt-40 2xl:mt-40'}>
            <div className={'m-auto container flex px-4 justify-between grow shrink sm:basis-2/12 lg:basis-6/12 xl:basis-6/12 2xl:basis-6/12'}>
                <div className={'flex justify-start gap-6 flex-col'}>
                    <Logo color={'white'}/>

                    <p className={'text-gray-400 w-8/12 sm:text-sm lg:text-lg xl:text-lg 2xl:text-lg'}>
                        Your Best Private Hideway From Crowd. Back to Nature.
                    </p>

                    <div className={'flex gap-6'}>
                        <ButtonTwitter/>
                        <ButtonFacebook/>
                        <ButtonInstagram/>
                    </div>
                </div>

                <div className={'flex justify-around gap-10 sm:basis-10/12 lg:basis-6/12 xl:basis-6/12 2xl:basis-6/12'}>
                    {
                        footerList.map((list, index) => {
                            return (
                                <ul key={index}>
                                    {
                                        list.map((item,index) => {
                                            if (item.title) {
                                                return <li key={index} className={'text-white font-bold sm:text-lg lg:text-lg xl:text-lg 2xl:text-lg'}>{item.title}</li>
                                            }
                                            return <li key={index} className={'text-white cursor-pointer transition hover:text-gray-400 ease-in sm:text-sm lg:text-lg xl:text-lg 2xl:text-lg'}>{item.text}</li>
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