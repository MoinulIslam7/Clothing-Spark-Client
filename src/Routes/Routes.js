import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main"
import Blog from "../Pages/Blog/Blog";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import AllBuyers from "../Pages/Dashboard/Admin/AllBuyers";
import AllSellers from "../Pages/Dashboard/Admin/AllSellers";
import MyBookings from "../Pages/Dashboard/MyBookings/MyBookings";
import MyWishList from "../Pages/Dashboard/MyWishList/MyWishList";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct";
import MyBuyers from "../Pages/Dashboard/Seller/MyBuyers";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts";
import Categories from "../Pages/Home/Categories/Categories";
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
                loader: () => fetch(`https://clothing-spark-server.vercel.app/products`),
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/categories',
                element: <Categories></Categories>
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
                loader: ({ params }) => fetch(`https://clothing-spark-server.vercel.app/products/${params.id}`)
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
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/mybuyers',
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
        ]
    },
    {
        path: '*',
        element: <PageNotFount></PageNotFount>
    }

])

export default router;