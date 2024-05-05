import React from 'react';
import instagram from '../assets/instagram.png'

const ButtonInstagram = () => {
    return (
        <button className={'cursor-pointer'}>
            <img src={instagram} alt={instagram}/>
        </button>
    );
};

export default ButtonInstagram;