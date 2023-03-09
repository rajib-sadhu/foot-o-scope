import React, { useState } from 'react'

const AdminCreateBlog = () => {

    const [blog_title, setTitleChange] = useState("");
    const [blog_desc, setDescChange] = useState("");



    const titleOnChange = (event) =>{
        const value = event.target.value;
        setTitleChange(value);
    }

    const descOnChange = (event) =>{
        const value = event.target.value;
        setDescChange(value);
    }

    const handleSubmit = (event) =>{

        event.preventDefault();

        fetch('https://quaint-ray-gear.cyclic.app/admin/blog', {
            method: 'POST',
            body: JSON.stringify({
                blogTitle: blog_title,
                blogDesc: blog_desc,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
        
    }


  return (
    <div className='w-full h-screen py-20 bg-[#00B5FF]'>
    <section className='mb-10'>
      <img src={window.location.origin + '/images/Text-FootOScope-logo.png'} className='md:w-2/5 w-3/4 mx-auto' alt="" />
    </section>

      <section className='w-full h-auto px-2'>
          
              <div className='mx-auto flex-col flex justify-center items-center w-1/2 p-5 bg-slate-300'>
                  
              <h1 className='md:text-3xl text-2xl font-semibold'>ADMIN BLOG POST</h1>
                  <form className='w-full flex items-center flex-col mt-5 space-y-5' onSubmit={handleSubmit} action="">
                  <div className='grid grid-cols-3 mx-auto bg-slate-400'>
                        <div className='col-span-1'>
                            <input type="file" name="" id="" />
                            <img src="" alt="" />
                        </div>
                        <div className='col-span-2 text-right'>
                        <input value={blog_title} onChange={titleOnChange} className='w-2/3 px-2 py-3' type="text" placeholder='Enter Username' />
                        <textarea value={blog_desc} onChange={descOnChange} name="" id="" cols="30" rows="10" placeholder='Write description there....'></textarea>
                        </div>

                  </div>
                  <div className='bg-[#00B5FF] hover:bg-[#0b6386] py-2 px-10 rounded-3xl'>
                  <button type='submit' className=' text-white' >Submit</button>
                  </div>
                  </form>
              </div>

      </section>

  </div>
  )
}

export default AdminCreateBlog
