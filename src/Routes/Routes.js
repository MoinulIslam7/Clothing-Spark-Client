import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main"
import Blog from "../Pages/Blog/Blog";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import MyBookings from "../Pages/Dashboard/MyBookings/MyBookings";
import MyWishList from "../Pages/Dashboard/MyWishList/MyWishList";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct";
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login";
import PageNotFount from "../Pages/Shared/PageNotFound/PageNotFount";
import Signup from "../Pages/SignUp/Signup";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <PageNotFount></PageNotFount>,
        children: [
            {
                path: '/',
                loader: () => fetch(`http://localhost:5000/products`),
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/categoryDetails/:id',
                element: <CategoryDetails></CategoryDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard/MyBookings',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/dashboard/MyWishList',
                element: <MyWishList></MyWishList>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
        ]
    },
    {
        path: '*',
        element: <PageNotFount></PageNotFount>
    }

])

export default router;