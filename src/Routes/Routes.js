import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
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
                loader: () => fetch(`product.json`),
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },

        ]
    },
    {
        path: '*',
        element: <PageNotFount></PageNotFount>
    }

])

export default router;