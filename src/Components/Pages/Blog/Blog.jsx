import React from 'react';

import {AiOutlineShareAlt} from 'react-icons/ai';

import { demoData } from './DemoData/demoData';


const Blog = () => {
  return (
    <>
    <div className='md:pt-36 pt-10 w-full'>
        <div className='flex justify-center py-5'>
        <h1 className='text-4xl font-bold uppercase'>Foot O Scope Blog's</h1>
        </div>

      <section className='flex flex-col justify-center items-center gap-5 m-5'>

          {
            demoData.map((val)=>{
              const {id, title, desc,image , date, time} = val;
              return <article key={id} className = "p-5 flex bg-slate-300 justify-between items-center h-60 w-3/4 gap-4" >
                <div className='w-1/4 py-5'>
                  <img src={image} alt="" className='h-52' />
                </div>

                <div className='w-3/4 py-5'>
                  
                  <div className='w-full h-40 overflow-scroll overflow-x-hidden space-y-4'>
                  <h1 className='text-2xl font-medium h-10 whitespace-nowrap text-ellipsis overflow-hidden'> {title} </h1>
                  <p className=' whitespace-wrap text-ellipsis'>{desc}</p>
                  </div>
                  
                  <div className='mt-5 flex justify-between'>
                    <div className='text-slate-700 font-semibold'>
                      <h2>Posted - <span>{date}, {time}</span> </h2>
                    </div>
                    <div className='space-x-2'>
                      <a href="" className='px-3 py-1 bg-[#00B5FF] rounded-xl'>
                          Read More
                      </a>
                      <a href="" className='px-3 py-1 bg-[#00B5FF] rounded-xl'>
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
