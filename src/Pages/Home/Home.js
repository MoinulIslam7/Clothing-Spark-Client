import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import SpecialOffer from './SpecialOffer/SpecialOffer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <SpecialOffer></SpecialOffer>
        </div>
    );
};

export default Home;