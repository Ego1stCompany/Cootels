import React from 'react';
import Header from "../components/Header.jsx";
import Reservation from "../components/Reservation.jsx";
import Learn from "../components/Learn.jsx";
import Activities from "../components/Activities.jsx";
import Rooms from "../components/Rooms.jsx";
import Contacts from "../components/Contacts.jsx";
import Customers from "../components/Customers.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
    return (
        <>
            <Header/>
            <Reservation/>
            <Learn/>
            <Activities/>
            <Rooms/>
            <Contacts/>
            <Customers/>
            <Footer/>
        </>
    );
};

export default Home;