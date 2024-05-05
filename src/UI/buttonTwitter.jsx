import React from 'react';
//images
import twitter from '../assets/twitter.png'

const ButtonTwitter = () => {
    return (
        <button className={'cursor-pointer'}>
            <img src={twitter} alt={twitter}/>
        </button>
    );
};

export default ButtonTwitter;