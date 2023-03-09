import React from 'react';
import { NavLink } from 'react-router-dom';

// import toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminPage = () => {
  return (
   <>
       <div className='h-screen py-20 bg-[#00B5FF]'>
      <section className='mb-10'>
        <NavLink to="/">
        <img src={window.location.origin + '/images/Text-FootOScope-logo.png'} className='md:w-2/5 w-3/4 mx-auto' alt="" />
        </NavLink>
      </section>

        <section className='h-auto px-2'>
            
                <div className='mx-auto flex-col flex justify-center w-[50rem] items-center md:h-96 p-5 bg-slate-300'>
                    
                <h1 className='md:text-3xl text-2xl font-semibold'>ADMIN PAGE</h1>

                  <div className='m-10 grid md:grid-cols-3 grid-cols-1 gap-10'>
                    <NavLink to="/admin/page/blog"  className='bg-[#0b2e59] text-white text-2xl p-16  rounded-xl' >Blog</NavLink>
                    <button onClick={()=> toast('Video Page Not Ready') } className='bg-[#0b2e59] text-white text-2xl p-16  rounded-xl' >Video</button>
                    <button onClick={()=> toast('Photo Page Not Ready') } className='bg-[#0b2e59] text-white text-2xl p-16  rounded-xl' >Photo</button>
                    
                  </div>


                </div>

        </section>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
    </div>
   </>
  )
}

export default AdminPage
