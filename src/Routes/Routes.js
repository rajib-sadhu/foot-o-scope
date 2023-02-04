import { createBrowserRouter } from "react-router-dom";


import Main from "../Components/Layouts/Main/Main"

import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";

import Home from "../Components/Pages/Home/Home";


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

    }

])
