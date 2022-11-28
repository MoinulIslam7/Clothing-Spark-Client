import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState, useContext} from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const AllSellers = () => {
    const [sellers, setSeller] = useState([]);
    const {user} = useContext(AuthContext);

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/users`);
                const data = await res.json();
                const showSellers = data.filter(buyer => buyer.status === "seller")
                setSeller(showSellers)
                return showSellers;
            }
            catch (error) {
                console.log(error);
            }
        }
    })



    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                const showBuyers = data.filter(buyer => buyer.status === "seller")
                setSeller(showBuyers)
            })
    }, [user])

    const handleDelete = user => {
        console.log(user)
        fetch(`http://localhost:5000/user/${user._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    toast.success('user Deleted Successfully')
                }
                refetch();
            })

    }
    return (
        <div>
            <h2 className='text-3xl text-center font-semibold  mt-10'>All Buyers</h2>

            <div className="overflow-x-auto w-5/6 mx-auto my-10">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map(user => <tr key={user._id}>
                                <td>
                                    {user?.name}
                                </td>
                                <td>
                                    {user?.email}
                                </td>
                                <td>{user?.status === 'seller' ? 'Seller' : 'Buyer'}</td>
                                <th>
                                    <button onClick={() => handleDelete(user)} className="btn btn-error btn-sm">Delete</button>
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllSellers;