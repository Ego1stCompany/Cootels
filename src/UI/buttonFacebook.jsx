import React from 'react';
//images
import facebook from '../assets/facebook.png'

const ButtonFacebook = () => {
    return (
        <button className={'cursor-pointer'}>
            <img src={facebook} alt={facebook}/>
        </button>
    );
};

export default ButtonFacebook;