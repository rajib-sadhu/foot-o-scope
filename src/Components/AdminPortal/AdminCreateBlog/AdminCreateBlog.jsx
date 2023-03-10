import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Toastify
import { toast } from 'react-toastify';


// Default Image
const defaultImage = `https://media.istockphoto.com/id/1341046662/vector/picture-profile-icon-human-or-people-sign-and-symbol-for-template-design.jpg?s=612x612&w=0&k=20&c=A7z3OK0fElK3tFntKObma-3a7PyO8_2xxW0jtmjzT78=`;

const AdminCreateBlog = () => {


    const [blog_title, setTitleChange] = useState("");
    const [blog_desc, setDescChange] = useState("");
    const [tagName, setTagName] = useState( 'footoscope');



    const titleOnChange = (event) =>{
        const value = event.target.value;
        setTitleChange(value);
    }

    const descOnChange = (event) =>{
        const value = event.target.value;
        setDescChange(value);
    }


    // Submit Blog data
    const handleSubmit = async (event) =>{

        event.preventDefault();
        // toast.promise('Posting....')

        if(blog_title==='' || blog_desc===''){
            toast.error("Please fill Title and Description field");
        }
        else{

       try{

        const res = await toast.promise(
            fetch("https://quaint-ray-gear.cyclic.app/admin/blog", {
                method: 'POST',
                body: JSON.stringify({
                    blogTitle: blog_title,
                    blogDesc: blog_desc,
                    blogTagName: tagName
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                }
            ),
            {
              pending: 'Promise is pending',
            }
        );

        // const res = await fetch('https://quaint-ray-gear.cyclic.app/admin/blog', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         blogTitle: blog_title,
        //         blogDesc: blog_desc,
        //         blogTagName: tagName
        //     }),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        //     });

            const data = await res.json();
            toast.success('Posting Successfully');

            console.log(data);

       }
       catch(err){
        console.error('ERR: '+ err);
        toast.error('Opps! Posting Error')
       }

       setTitleChange('');
       setDescChange('');
        }


        
    }


  return (
    <div className=' py-20 bg-[#00B5FF]'>
    <section className='mb-10'>
    <NavLink to="/">
        <img src={window.location.origin + '/images/Text-FootOScope-logo.png'} className='md:w-2/5 w-3/4 mx-auto' alt="" />
        </NavLink>
    </section>

      <section className='mx-auto flex-col flex justify-center items-center w-9/12 p-5 bg-slate-300'>
          
                  
              <h1 className='md:text-3xl text-2xl font-semibold'>ADMIN BLOG POST</h1>

                    <form className='mt-10' onSubmit={handleSubmit} action="">

                               <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                               <div className='space-y-2'>
                                    <input type="file" name="" id="" />
                                    <img className='w-full h-48 border-1 border-black border' src="" alt="upload image show there" />
                                    <p>Tag Name: </p>
                                    <input className='text-md w-full p-2' type="text" value={tagName} onChange={e=>setTagName(e.target.value)} placeholder="Write tag names" />
                                </div>
                                
                                <div className='text-right space-y-2'>
                                <input value={blog_title} onChange={titleOnChange} className='w-full px-2 py-3' type="text" placeholder='Enter title' />
                                <textarea value={blog_desc} onChange={descOnChange} className='w-full p-3' cols="30" rows="10" placeholder='Write description there....'></textarea>
                                </div>
                               </div>

                                <div className='mt-5 text-center'>
                                <button type='submit' className='bg-[#00B5FF] hover:bg-[#0b6386] py-2 px-10 rounded-3xl text-white' >Submit</button>
                                </div>
                  </form>
      </section>
  </div>
  )
}

export default AdminCreateBlog;
