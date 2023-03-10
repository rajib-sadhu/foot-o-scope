import React, { useEffect, useState } from 'react';
import {FaBloggerB} from 'react-icons/fa';

// React Icons
import EachBlog from './EachBlog';





const Blog = () => {


  const [isLoading, setIsLoading ] =useState(true);

  const [blogData, setData] = useState([]);

  // let isLoading = true;
  const API = 'https://quaint-ray-gear.cyclic.app/admin/blog';


  const fetchApiData = async (url) =>{

    try{

      const res = await fetch(url);
      const data = await res.json();
      // console.log(data)
      setData(data);
      data.sort((a, b) => new Date(b.blog_created_at) - new Date(a.blog_created_at));
      setIsLoading(false);

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
    return (<>  
      <div className='flex items-center justify-center min-h-screen'>
        <div className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
        <p className="ml-2">Loading...</p>
      </div>
     </>)
  }




 return(
  <>
    <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">

      <div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
          max-w-7xl">
          <div className="flex flex-col items-center sm:px-5 md:flex-row">
          <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
              <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
                  md:space-y-5">
              <div className="bg-[#00B5FF] flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
                  uppercase inline-block">
                  <p className="inline pr-2"><FaBloggerB/></p>
                  <p className="inline text-xs font-medium">New</p>
              </div>
              <p className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">Write anything. Be creative.</p>
              {/* <div className="pt-2 pr-0 pb-0 pl-0">
                  <p className="text-sm font-medium inline">author:</p>
                  <a className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline">Jack Sparrow</a>
                  <p className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">· 23rd, April 2021 ·</p>
                  <p className="text-gray-200 text-sm font-medium inline mt-0 mr-1 mb-0 ml-1">1hr 20min. read</p>
              </div> */}
              </div>
          </div>
          <div className="w-full md:w-1/2">
              <div className="block">
              <img
                  src="https://i.ibb.co/FxLXHSV/Ak-Tarfa-Poster-1.jpg" className="object-contain rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"/>
              </div>
          </div>
          </div>
          <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
          {
        blogData.map((val)=>{
                      const {blog_id, blog_title, blog_desc, blog_created_at} = val;
                      
                      return <EachBlog key={blog_id} data={val} />
        })
      }

          </div>
      </div>
      </div>


      
  </>
 )

}

export default Blog;




  // return (
  //   <>
  //   <div className='pt-5 w-full'>
  //       <div className='flex justify-center py-5 mx-4'>
  //       <h1 className='text-4xl font-bold uppercase'>Foot O Scope Blog's</h1>
  //       </div>

  //     <section className='my-5 flex flex-col justify-center items-center gap-5 md:m-5'>
  //     {/* Show Modal */}
  //     {show && <BlogModal handleClose={handleClose} modalValue={setModalValue} />}

  //         {
  //           blogData.map((val)=>{
  //             const {blog_id, blog_title, blog_desc, blog_created_at} = val;
             
              
  //             // convert Date in local format
  //             const d = new Date(blog_created_at);
  //             const date = `${(formatAMPM(d))}, ${d.toLocaleDateString('en-GB')}`;


  //             return <article key={blog_id} className = " md:flex bg-slate-300 justify-between items-center md:h-60 md:w-3/4 w-11/12 gap-4" >
  //               <div className='md:w-1/4 md:block flex justify-center  py-5'>
  //                 <img src="https://i.ibb.co/swtG2vY/FOOT-O-SCOPE-PRESENT-1.png" alt="" className='h-52' />
  //               </div>

  //               <div className='md:w-3/4 py-5 px-5'>
                  
  //                 <div className='w-full md:h-40 space-y-4'>
  //                 <h1 className='text-2xl font-medium md:h-10 whitespace-nowrap overflow-hidden text-ellipsis'> {blog_title} </h1>
  //                 <div className=' md:h-[6rem]'>
  //                 <p className='overflow-hidden'>{blog_desc.length>500? `${blog_desc.slice(0,500)}...`: blog_desc }</p>
  //                 </div>
  //                 </div>
                  
  //                 <div className='mt-5 md:flex justify-between md:space-x-0 space-y-4'>
  //                   <div className='text-slate-500'>
  //                     <h2>Posted - <span>{date}</span> </h2>
  //                   </div>
  //                   <div className='space-x-2'>
  //                     <button className='px-3 py-1 bg-[#00B5FF] rounded-xl' variant="primary" onClick={()=>{
  //                       handleShow();
  //                       isSetModalValue(val);
  //                     }}>
  //                         View <GrFormView className='inline text-2xl' />
  //                     </button>
  //                     <button onClick={()=>alert("This page is not ready..")} className='px-3 py-1 bg-[#00B5FF] rounded-xl'>
  //                         Share <AiOutlineShareAlt className='inline text-2xl' />
  //                     </button>
  //                   </div>
  //                 </div>

  //               </div>
                
  //             </article>
  //           })
  //         }

  //     </section>

          

  //   </div> 
  //   </>
  // )
