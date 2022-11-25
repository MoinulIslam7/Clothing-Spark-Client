import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Blog from "../Pages/Blog/Blog";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login";
import PageNotFount from "../Pages/Shared/PageNotFound/PageNotFount";
import Signup from "../Pages/SignUp/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
        path: '*',
        element: <PageNotFount></PageNotFount>
    }

])

export default router;