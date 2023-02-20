import React from 'react'

const About = () => {
  return (
    <div className='w-full h-auto bg-[#00B5FF] px-20'>
        <div className='grid grid-cols-6'>
            <div className='bg-blue-800 h-36'>

            </div>
            <div className='bg-green-400 h-36 col-span-4'>
                <h1></h1>
            </div>
            <div className='bg-red-400 h-36'>

            </div>
        </div>
        <div className='grid grid-cols-5 grid-rows-7 mt-10'>
            <div className="bg-green-200">
              
            </div>
            <div className="bg-green-800">
              <div className="">
                <img src="https://images.unsplash.com/photo-1676845223022-b0c64c7f9ce9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
              </div>
              <div className="">
                <img src="https://images.unsplash.com/photo-1676839670988-55a7e968f5f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
              </div>
            </div>
            <div className="bg-green-600 row-span-6 overflow-hidden">
            <div className='row-span-6 w-[27.6rem]'>
                <img className='object-[-4rem]' src="https://images.unsplash.com/photo-1676873261959-173b91552b0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
              </div>
            </div>
            <div className="bg-green-700">
              4
            </div>
            <div className="bg-green-500">
              5
            </div>
        </div>
      
    </div>
  )
}

export default About;
