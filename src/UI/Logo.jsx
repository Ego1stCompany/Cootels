import React from 'react';

const Logo = (props) => {
    return (
        <h1 className={`font-bold text-4xl text-${props.color}`}>
            Cootels
        </h1>
    );
};

export default Logo;