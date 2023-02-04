import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError()

    return (
        <div>
            <img src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=2000" alt="" className='h-96 mx-auto' />
            <h3 className="text-2xl text-red-600">Ops! Something Wrong.</h3>
            <p>{error.status || error.message}</p>

        </div>
    );
};

export default ErrorPage;