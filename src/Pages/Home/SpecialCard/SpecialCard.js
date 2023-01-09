import React from 'react';
import { Link } from 'react-router-dom';
import girls from "../../../Assets/img/SpecialCard/girls.jpg"
import HoludWomen from "../../../Assets/img/SpecialCard/HoludWomen.jpg"
import kidsGirls from "../../../Assets/img/SpecialCard/kidsGirls.jpg"
import kidsWomen from "../../../Assets/img/SpecialCard/kidswomen.jpg"
import PunjabiMen from "../../../Assets/img/SpecialCard/PunjabiMen.jpg"
import WomenFashion from "../../../Assets/img/SpecialCard/Women-Fashion.jpg"
const SpecialCard = () => {
    return (
        <div>
            <div className="p-10 mt-10">
                <div class="grid grid-cols-3 gap-4 grid-flow-row ">
                    <div className="p-3 relative text-center row-start-1 row-end-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <img className='h-5/6' src={girls} alt="" />
                        <h1 class="absolute text-5xl text-pink-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Retro Allure <Link to="/categories" className='btn btn-secondary'> Shop Now</Link></h1>
                    </div>
                    <div className="p-3 text-center col-start-2 col-end-4 relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <img className='w-full h-96' src={kidsWomen} alt="" />
                        <h1 class="absolute text-5xl text-pink-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                           Cloths Store <br /><Link to="/categories" className='btn btn-secondary'>Shop Now</Link></h1>

                    </div>
                    <div className="p-3 text-center relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <img className='w-full h-3/4' src={WomenFashion} alt="" />
                        <h1 class="absolute text-5xl text-pink-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                             Kameez <br /><Link to="/categories" className='btn btn-secondary'> Shop Now</Link></h1>

                    </div>
                    <div className="p-3 text-center relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <img className='w-full h-3/4' src={PunjabiMen} alt="" />
                        <h1 class="absolute text-5xl text-pink-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Stylish Punjabi <br /><Link to="/categories" className='btn btn-secondary'> Shop Now</Link></h1>
                        

                    </div>

                </div>
            </div>
        </div>
    );
};

export default SpecialCard;