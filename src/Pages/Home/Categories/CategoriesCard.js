import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({categoryData}) => {
    const { id, category, img } =  categoryData;
    console.log(id)
    return (
        <div className="card card-compact w-96 shadow-xl p-3">
            <div className="card-body">
                <img src={img} alt="" />
                <h2 className="card-title justify-center">{category}</h2>
               
                <div className="card-actions justify-center">
                    <Link to={`/categoryDetails/${id}`}>
                        
                        <button className='border-2 rounded bg-blue-600 text-white px-4 py-1 '>View Product On this Category</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoriesCard;