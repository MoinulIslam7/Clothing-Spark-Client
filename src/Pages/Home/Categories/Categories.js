import React, { useEffect, useState } from 'react';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://clothing-spark-server.vercel.app/products/')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='mx-10'>
            <div className='text-center mb-4'>
                <h2 className="text-5xl font-semibold m-3">Second Hand Product Categories</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5'>
                {
                    categories.map(categoryData => <CategoriesCard
                        key={categoryData._id}
                        categoryData={categoryData}
                    ></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;