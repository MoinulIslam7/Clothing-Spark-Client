import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryDetails = () => {
    const {id, category, products} = useLoaderData();
    console.log(id, category, products)
    return (
        <div>
            
        </div>
    );
};

export default CategoryDetails;