import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom'


const AdminLogin = () => {

  const navigate = useNavigate();

  // for get email and password value
  const [admin, setAdmin] = useState({
    email:'admin',
    password:'2017',
    errorMsg: false
  })

  // Form Submit
    const handleSubmit = (event)=>{
        event.preventDefault();
        const adminEmail = admin.email;
        const adminPassword = admin.password;

        if(adminEmail == 'admin' && adminPassword=='2017'){
          alert('login successfully');
          return(
            navigate('/admin/page')
          )
        }
        else{
          alert('Invalid Email and Password')
        }
        setAdmin({
          email:'',
          password:''
        })
    }

  return (
    <div className='w-full h-screen py-20 bg-[#00B5FF]'>
      <section className='mb-10'>
        <img src={window.location.origin + '/images/Text-FootOScope-logo.png'} className='md:w-2/5 w-3/4 mx-auto' alt="" />
      </section>

        <section className='w-full h-auto px-2'>
            
                <div className='mx-auto flex-col flex justify-center items-center md:w-96 md:h-96 p-5 bg-slate-300'>
                    
                <h1 className='md:text-3xl text-2xl font-semibold'>ADMIN PORTAL LOGIN</h1>
                    <form className='w-full flex items-center flex-col mt-5 space-y-5' onSubmit={handleSubmit} action="">
                    <input className='w-2/3 px-2 py-3' onChange={e=>setAdmin({email:e.target.value})} value={admin.email} type="text" placeholder='Enter Username' />
                    <input className='w-2/3 px-2 py-3' onChange={e=>setAdmin({password:e.target.value})} value={admin.password} type="password" placeholder='Enter Password' />
                    <span className='text-red-700 w-full text-right pr-5'>
                        <a onClick={()=>alert('username is admin and password is 2017')} href="#" className=''>Forgot password?</a>
                    </span>

                    <button style={{backgroundColor:'#00B5FF'}} type='submit' className='hover:bg-[#0b6386] py-2 px-10 rounded-3xl text-white' >Login</button>

                    </form>
                </div>

        </section>

    </div>
  )
}

export default AdminLogin
