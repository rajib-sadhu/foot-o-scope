import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const Main = () => {

    const outStyle ={
        minHeight:'100vh'
    }

    return (
        <div className=''>
            <Header></Header>
            <div style={outStyle} className='md:pt-28 pt-16'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;