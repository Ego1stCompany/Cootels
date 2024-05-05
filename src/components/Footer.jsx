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
        <footer className={'bg-[#0B265A] py-20 mt-40'}>
            <div className={'m-auto container flex px-4 justify-between basis-6/12 grow shrink'}>
                <div className={'flex justify-start gap-6 flex-col'}>
                    <Logo color={'white'}/>

                    <p className={'text-gray-400 w-5/12'}>
                        Your Best Private Hideway From Crowd. Back to Nature.
                    </p>

                    <div className={'flex gap-6'}>
                        <ButtonTwitter/>
                        <ButtonFacebook/>
                        <ButtonInstagram/>
                    </div>
                </div>

                <div className={'flex basis-6/12 justify-around gap-10'}>
                    {
                        footerList.map((list, index) => {
                            return (
                                <ul key={index}>
                                    {
                                        list.map((item,index) => {
                                            if (item.title) {
                                                return <li key={index} className={'text-lg text-white font-bold'}>{item.title}</li>
                                            }
                                            return <li key={index} className={'text-lg text-white cursor-pointer transition hover:text-gray-400 ease-in'}>{item.text}</li>
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