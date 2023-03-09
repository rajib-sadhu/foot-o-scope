import React, { useEffect, useState } from 'react';

import {AiOutlineShareAlt} from 'react-icons/ai';

// import { demoData } from './DemoData/demoData';




const Blog = () => {

  const [isLoading, setIsLoading ] =useState(true);

  const [demoData, setData] = useState([]);

  // let isLoading = true;
  const API = 'https://quaint-ray-gear.cyclic.app/admin/blog';


  const fetchApiData = async (url) =>{

    try{

      const res = await fetch(url);
      const data = await res.json();
      // console.log(data)
      setData(data);
      setIsLoading(false)

    }
    catch(error){
      console.error();
      console.log(error);
    }
  }

  useEffect(()=>{

    fetchApiData(API);

  },[]);

  // API Loading Animation
  if(isLoading){
    return <> <h1 className='mt-10 text-center'>Loading.....</h1> </>
  }

  // Convert Time in AM PM format
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }



  return (
    <>
    <div className='pt-5 w-full'>
        <div className='flex justify-center py-5 mx-4'>
        <h1 className='text-4xl font-bold uppercase'>Foot O Scope Blog's</h1>
        </div>

      <section className='my-5 flex flex-col justify-center items-center gap-5 md:m-5'>

          {
            demoData.map((val)=>{
              const {blog_id, blog_title, blog_desc, blog_created_at} = val;

              // convert Date in local format
              const d = new Date(blog_created_at);
              const date = `${(formatAMPM(d))}, ${d.toLocaleDateString()}`;


              return <article key={blog_id} className = "p-5 md:flex bg-slate-300 justify-between items-center md:h-60 md:w-3/4 w-11/12 gap-4" >
                <div className='md:w-1/4 md:block flex justify-center  py-5'>
                  <img src="" alt="" className='h-52' />
                </div>

                <div className='md:w-3/4 py-5'>
                  
                  <div className='w-full h-40 space-y-4'>
                  <h1 className='text-2xl font-medium h-10 whitespace-nowrap text-ellipsis overflow-hidden'> {blog_title} </h1>
                  <div className='overflow-scroll overflow-x-hidden h-[6rem]'>
                  <p className=''>{blog_desc}</p>
                  </div>
                  </div>
                  
                  <div className='mt-5 md:flex justify-between md:space-x-0 space-y-4'>
                    <div className='text-slate-500'>
                      <h2>Posted - <span>{date}</span> </h2>
                    </div>
                    <div className='space-x-2'>
                      <a href="#" onClick={()=>alert("This page is not ready..")} className='px-3 py-1 bg-[#00B5FF] rounded-xl'>
                          Read More
                      </a>
                      <a href="#" onClick={()=>alert("This page is not ready..")} className='px-3 py-1 bg-[#00B5FF] rounded-xl'>
                          Share <AiOutlineShareAlt className='inline' />
                      </a>
                    </div>
                  </div>

                </div>
                
              </article>
            })
          }

      </section>


    </div> 
    </>
  )
}

export default Blog
