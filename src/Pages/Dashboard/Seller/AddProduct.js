import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.name.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const used = form.used.value;
        const resalePrice = form.resalePrice.value;
        const originalPrice = form.originalPrice.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = user?.email;

        const product = {
            productName,
            sellerName,
            sellerEmail,
            originalPrice,
            resalePrice,
            location,
            used,
            phone,
        }
        console.log(product)
        fetch('http://localhost:5000/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    toast.success('Your Product Has Added Successfully');
                    navigate('/dashboard/myproducts')
                }
                console.log(result)
            })
    }

    return (
        <div >
            <div className="">
                <form onSubmit={handleSubmit} className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">

                    <div className="bg-white shadow-lg rounded  md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
                        <p tabIndex={0} className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
                            Add Your Product
                        </p>
                        <div className="mt-6 w-full">
                            <label htmlFor="name" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Product Name{" "}
                            </label>
                            <input name='name' id="name" aria-labelledby="name" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="Add Your product name" required />
                        </div>

                        <div className="mt-6 w-full">
                            <label htmlFor="location" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Location{" "}
                            </label>
                            <input name='location' id="location" aria-labelledby="location" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="Enter Your Location" required />
                        </div>
                        <div className="mt-6 w-full">
                            <label htmlFor="phone" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Phone{" "}
                            </label>
                            <input name='phone' id="phone" aria-labelledby="location" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="Enter Your phone" required />
                        </div>

                        <div className="mt-6 w-full">
                            <label htmlFor="used" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                How many years/months You Used this product?{" "}
                            </label>
                            <input name='used' id="used" aria-labelledby="used" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="e.g: 1 year / 6 months " required />
                        </div>


                        <div className="mt-6 w-full">
                            <label htmlFor="originalPrice" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Original Price{" "}
                            </label>
                            <input name='originalPrice' id="originalPrice" aria-labelledby="originalPrice" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="Enter Original Price " required />
                        </div>


                        <div className="mt-6 w-full">
                            <label htmlFor="resalePrice" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Sale Price{" "}
                            </label>
                            <input name='resalePrice' id="resalePrice" aria-labelledby="resalePrice" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="Enter resale price" required />
                        </div>

                        <div className="mt-6 w-full">
                            <label htmlFor="sellerName" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Your Name{" "}
                            </label>
                            <input name='sellerName' disabled defaultValue={user?.displayName} id="sellerName" aria-labelledby="sellerName" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 "  required />
                        </div>
                        <input className='w-full btn btn-primary mt-10' type="submit" value="Submit" />

                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddProduct;