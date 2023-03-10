import React from 'react';
import { NavLink, useRouteError } from 'react-router-dom';

import './errorPage.css';

const ErrorPage = () => {

    const error = useRouteError()

    return(
        <>
        <div className="bg-gradient-to-r from-purple-300 to-blue-200">
            <div className="w-11/12 m-auto py-16 min-h-screen flex items-center justify-center">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8 px-5">
                    <div className="border-t border-gray-200 text-center pt-8">
                    <h1 className="md:text-9xl text-6xl font-bold text-purple-400">404</h1>
                    <h1 className="md:text-6xl text-xl font-medium py-8">oops! Page not found</h1>
                    <p className="text-2xl pb-8 px-12 font-medium">
                    {error.status } <span className=''>{ error.message}</span>
                    </p>
                    <NavLink to="/home" className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold md:px-6 px-3 md:py-3 py-1 rounded-md mr-6">
                    HOME
                    </NavLink>
                    <NavLink onClick={()=>alert('not ready')} to="" className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold md:px-6 px-3 md:py-3 py-1 rounded-md">
                    Contact Us
                    </NavLink>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

};

export default ErrorPage;