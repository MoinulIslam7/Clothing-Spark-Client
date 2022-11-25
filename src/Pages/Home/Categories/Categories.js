import React, { useEffect, useState } from 'react';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products/')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-4'>
                <h2 className="text-5xl font-semibold m-3">My Services</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5'>
                {
                    categories.map(categoryData => <CategoriesCard
                        key={categoryData.id}
                        categoryData={categoryData}
                    ></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;