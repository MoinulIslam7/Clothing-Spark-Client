import React from 'react';
import kids from "../../../Assets/Banner/kids.jpeg"
import Man from "../../../Assets/Banner/Man.jpeg"
import Women from "../../../Assets/Banner/Women.jpeg"

const Banner = () => {
    return (
        <div className='h-[900px]'>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={kids} className="w-full h-3/5" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={Man} className="w-full h-3/5" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={Women} className="w-full h-3/5" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;