import React from 'react';

const SpecialOffer = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://cdn.shopify.com/s/files/1/0564/4081/5810/files/Brazil_vs_Argentina_720x.png?v=1669295907" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-3xl font-bold">Clothing Spark World Cup Fest</h1>
                        <p className="py-6">Get your favourite team jersey by buying over one thousand.</p>
                        <button className="btn btn-primary">Get Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;