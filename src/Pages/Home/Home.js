import React from 'react';
import Advertise from './Advertise/Advertise';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Contact from './Contact/Contact';
import SpecialOffer from './SpecialOffer/SpecialOffer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <Categories></Categories>
            <SpecialOffer></SpecialOffer>
            <Contact></Contact>
        </div>
    );
};

export default Home;