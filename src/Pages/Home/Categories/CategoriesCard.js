import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({categoryData}) => {
    const { _id, category, img } =  categoryData;
    return (
        <div className="card card-compact w-96 h-3/4 shadow-xl p-3">
            <div className="card-body">
                <img className='w-full h-96' src={img} alt="" />
                <h2 className="card-title justify-center">{category}</h2>
                <div className="card-actions justify-center">
                    <Link to={`/categoryDetails/${_id}`}>
                        <button className=' btn btn-primary border-2 rounded px-4 py-1 '>View Product On this Category</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoriesCard;