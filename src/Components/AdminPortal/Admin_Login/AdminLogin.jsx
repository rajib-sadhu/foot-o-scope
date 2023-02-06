import React from 'react';


const AdminLogin = () => {

    const handleSubmit = (event)=>{
        event.preventDefault();
        alert()
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
                    <input className='w-2/3 px-2 py-3' type="text" placeholder='Enter Username' />
                    <input className='w-2/3 px-2 py-3' type="password" placeholder='Enter Password' />
                    <span className='text-red-700 w-full text-right pr-5'>
                        <a href="#" className=''>Forgot password?</a>
                    </span>
                    <div className='bg-[#00B5FF] hover:bg-[#0b6386] py-2 px-10 rounded-3xl'>
                    <button type='submit' className=' text-white' >Login</button>
                    </div>
                    </form>
                </div>

        </section>

    </div>
  )
}

export default AdminLogin
