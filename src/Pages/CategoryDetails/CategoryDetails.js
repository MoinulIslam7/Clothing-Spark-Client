import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryDetails = () => {
    const { products } = useLoaderData();
    return (
        <div>
            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-1">
                {
                    products.map((product, i)=>
                        <div key={i}>
                            <div className="card w-96 h-5/6 bg-sky-700 mx-auto shadow-xl">
                                <figure className="px-20 pt-20">
                                    <img  src={product.image} alt="Shoes"  />
                                </figure>
                                <div className="card-body text-left">
                                    <h2 className="card-title justify-center">{product.product_name}</h2>
                                    <p>location: {product.location}</p>
                                    <p>Resale Price: {product.resalePrice} Taka</p>
                                    <p>Original price: {product.originalPrice} Taka</p>
                                    <p>Used Duration: {product.usedTime}</p>
                                    <p>Post Time: {product.postTime}</p>
                                    <p>Seller Name: {product.sellersName}</p>
                                    

                                    <div className="card-actions justify-center">
                                        <button className="btn btn-primary">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default CategoryDetails;