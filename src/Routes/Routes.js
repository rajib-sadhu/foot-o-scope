import { createBrowserRouter } from "react-router-dom";


import Main from "../Components/Layouts/Main/Main"

import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";

import Home from "../Components/Pages/Home/Home";
import Blog from "../Components/Pages/Blog/Blog";
import AdminLogin from "../Components/AdminPortal/Admin_Login/AdminLogin";
import AdminPage from "../Components/AdminPortal/AdminPage/AdminPage";
import About from "../Components/Pages/About/About";
import AdminCreateBlog from "../Components/AdminPortal/AdminCreateBlog/AdminCreateBlog";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            
            // {
            //     path: '/category/:id',
            //     element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>,
            //     loader: ({ params }) => {
            //         return fetch(`https://b612-used-products-resale-server-side-nabinchowdhury.vercel.app/category/${params.id}`)
            //     }
            // },
            //     loader: ({ params }) => {
            //         return params.id
            //     }
            // },
            
            
        ]

    },

    {
        path: '/admin',
        element:<AdminLogin/>
    },
    {
        path: '/admin/page',
        element: <AdminPage/>
    },
    {
        path: '/admin/page/blog',
        element: <AdminCreateBlog/>
    },

])
