import React from 'react';
import { NavLink, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError()

    return (
        <div className='text-center'>
            <img src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=2000" alt="" className='mx-auto w-1/2' />
            <div className='text-center mb-6'>
            <h3 className="md:text-4xl text-2xl text-red-600 mb-3">Ops! Something Wrong.</h3>
            <p className='text-2xl font-semibold '>{error.status } <span className=''>{ error.message}</span> </p>
            </div>
            
            <NavLink to="/home" className="text-slate-100 bg-[#00B5FF] hover:bg-[#0b678b] px-4 py-2 font-medium border-zinc-700 border rounded-3xl" >Back to Home</NavLink>
        </div>
    );
};

export default ErrorPage;