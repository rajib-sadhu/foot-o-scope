import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const Main = () => {

    return (
        <div className=''>
            <div className='z-50'>
            <Header></Header>
            </div>
            <div className='h-screen'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;