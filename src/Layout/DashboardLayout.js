import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import UseAdmin from '../Hooks/UseAdmin';
import UseBuyer from '../Hooks/UseBuyer';
import UseSeller from '../Hooks/UseSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = UseAdmin(user?.email)
    const [isSeller] = UseSeller(user?.email)
    const [isBuyer] = UseBuyer(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-blue-800 text-base-content">
                        {
                            isBuyer &&
                            <>
                                <li><Link to='/dashboard/MyBookings'>My Orders</Link></li>
                                <li><Link to='/dashboard/MyWishList'>My WishList</Link></li>
                            </>
                        }
                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/AddProduct'>Add a Product</Link></li>
                                <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                                <li><Link to='/dashboard/mybuyers'>My Buyers</Link></li>
                            </>
                        }
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                                <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;