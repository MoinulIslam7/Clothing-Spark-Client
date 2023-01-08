import React from 'react';
import Advertise from './Advertise/Advertise';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Contact from './Contact/Contact';
import EasyReturn from './EasyReturn/EasyReturn';
import InfoCards from './InfoCards/InfoCards';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='mx-10 mt-10'>
            <Advertise></Advertise>
            <Categories></Categories>
            <SpecialOffer></SpecialOffer>
            <EasyReturn></EasyReturn>
            <Testimonial></Testimonial>
            <InfoCards></InfoCards>
            <Contact></Contact>
            </div>  
        </div>
    );
};

export default Home;