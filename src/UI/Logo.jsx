import React from 'react';

const Logo = (props) => {
    return (
        <h1 className={`${props.style} font-bold text-${props.color} sm:block text-2xl lg:block text-4xl xl:block text-4xl 2xl:block text-4xl`}>
            Cootels
        </h1>
    );
};

export default Logo;