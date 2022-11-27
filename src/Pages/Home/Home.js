import React from 'react';
import Advertise from './Advertise/Advertise';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import SpecialOffer from './SpecialOffer/SpecialOffer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertise></Advertise>
            <SpecialOffer></SpecialOffer>
        </div>
    );
};

export default Home;