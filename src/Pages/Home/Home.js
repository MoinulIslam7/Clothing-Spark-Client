import React from 'react';
import Advertise from './Advertise/Advertise';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Contact from './Contact/Contact';
import InfoCards from './InfoCards/InfoCards';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <Categories></Categories>
            <SpecialOffer></SpecialOffer>
            <Testimonial></Testimonial>
            <InfoCards></InfoCards>
            <Contact></Contact>
        </div>
    );
};

export default Home;