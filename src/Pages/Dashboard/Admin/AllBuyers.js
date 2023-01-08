import { useQuery } from '@tanstack/react-query';
import React, { useState, useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const AllBuyers = () => {
    const [buyers, setBuyers] = useState([]);
    const { user } = useContext(AuthContext);

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://clothing-spark-server.vercel.app/users`);
                const data = await res.json();
                const showBuyers = data.filter(buyer => buyer.status === "user")
                setBuyers(showBuyers)
                return showBuyers;
            }
            catch (error) {
                console.log(error);
            }
        }
    })

    const handleDelete = user => {
        console.log(user)
        fetch(`https://clothing-spark-server.vercel.app/user/${user._id}`, {
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
                            buyers.map(user => <tr key={user._id}>
                                <td>
                                    {user?.name}
                                </td>
                                <td>
                                    {user?.email}
                                </td>
                                <td>{user?.status === 'user' ? 'Buyer' : 'Seller'}</td>
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

export default AllBuyers;