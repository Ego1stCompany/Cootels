import React from 'react';
import {useSelector} from "react-redux";
//components
import NavigationItem from "./NavigationItem.jsx";

const Navigation = () => {

    const navigationArray = useSelector(state => state.navigation);

    return (
        <div className={'justify-between px-2 gap-6 hidden sm:flex lg:flex xl:flex 2xl:flex'}>
            {
                navigationArray.map(item => (
                    <NavigationItem key={item.id} title={item.title}/>
                ))
            }
        </div>
    );
};

export default Navigation;