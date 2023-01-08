import React from 'react';
import easyReturn from "../../../Assets/img/easyReturn.jpg"
import quality from "../../../Assets/img/quality.jpg"
import sustainable from "../../../Assets/img/sustainable.jpg"

const EasyReturn = () => {
    return (
    
        <div className='bg-base-200 mt-20 mb-20 p-20'>
            <div>
            <h2 className='text-center text-5xl font-bold'>All Thrills, Zero Guilt</h2>
            </div>
            <div className='md:flex justify-center mx-auto gap-4 '>
            <div className="card mt-10 w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img className='w-96' alt='' src={easyReturn} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Easy Return</h2>
                    <p>Buy without the risk. Enjoy hassle-free returns with your order.</p>
                </div>
            </div>
            <div className="card mt-10 w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img className='w-96' alt='' src={quality} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Quality finds</h2>
                    <p>Each item undergoes a 12-point inspection to meet our high quality standards.</p>
                </div>
            </div>
            <div className="card mt-10 w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img className='w-50' alt='' src={sustainable} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Sustainable style</h2>
                    <p>Shopping (and wearing!) secondhand clothing instead of new reduces carbon emissions by an average of 25%.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default EasyReturn;