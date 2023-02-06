import React from 'react';

import {AiOutlineShareAlt} from 'react-icons/ai';

import { demoData } from './DemoData/demoData';


const Blog = () => {
  return (
    <>
    <div className='pt-5 w-full'>
        <div className='flex justify-center py-5 mx-4'>
        <h1 className='text-4xl font-bold uppercase'>Foot O Scope Blog's</h1>
        </div>

      <section className='my-5 flex flex-col justify-center items-center gap-5 md:m-5'>

          {
            demoData.map((val)=>{
              const {id, title, desc,image , date, time} = val;
              return <article key={id} className = "p-5 md:flex bg-slate-300 justify-between items-center md:h-60 md:w-3/4 w-11/12 gap-4" >
                <div className='md:w-1/4 md:block flex justify-center  py-5'>
                  <img src={image} alt="" className='h-52' />
                </div>

                <div className='md:w-3/4 py-5'>
                  
                  <div className='w-full h-40 space-y-4'>
                  <h1 className='text-2xl font-medium h-10 whitespace-nowrap text-ellipsis overflow-hidden'> {title} </h1>
                  <div className='overflow-scroll overflow-x-hidden h-[6rem]'>
                  <p className=''>{desc}</p>
                  </div>
                  </div>
                  
                  <div className='mt-5 md:flex justify-between md:space-x-0 space-y-4'>
                    <div className='text-slate-700 font-semibold'>
                      <h2>Posted - <span>{date}, {time}</span> </h2>
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
