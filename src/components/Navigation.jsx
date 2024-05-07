import React from 'react';
import {useSelector} from "react-redux";

const Navigation = () => {

    const navigationArray = useSelector(state => state.navigation);

    return (
        <div className={'flex justify-between px-2 gap-6'}>
            {
                navigationArray.map(item => (
                    <p className={'font-medium  cursor-pointer  hover:text-[#0000008c] ease-in duration-300 sm:text-sm lg:text-xl xl:text-xl 2xl:text-xl'} key={item.id}>
                        {item.title}
                    </p>
                ))
            }
        </div>
    );
};

export default Navigation;