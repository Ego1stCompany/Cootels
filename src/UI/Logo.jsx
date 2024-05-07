import React from 'react';

const Logo = (props) => {
    return (
        <h1 className={`font-bold text-${props.color} sm:text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl`}>
            Cootels
        </h1>
    );
};

export default Logo;