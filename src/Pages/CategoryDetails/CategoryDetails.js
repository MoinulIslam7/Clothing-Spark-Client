import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryDetails = () => {
    const { id, category, products } = useLoaderData();
    console.log(id, category, products)
    return (
        <div>
            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-1">
                {
                    products.map(product =>
                        <div key={product.id}>
                            <div className="card w-96 h-5/6 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img  src={product.image} alt="Shoes"  />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{product.product_name}</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Buy Now</button>
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