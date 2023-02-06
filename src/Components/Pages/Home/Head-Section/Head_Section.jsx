import React from 'react';

import {ImPlay} from 'react-icons/im';
import {AiOutlineWifi} from 'react-icons/ai';


import logo from '../../../../assest/images/Icon-FootOScope-logo.svg';

const Head_Section = () => {
  return (
    <>
         <header className='w-full bg-[#00B5FF] flex justify-center items-center md:flex-row flex-col-reverse md:gap-56 gap-0 md:p-36 p-10 '>
        <div className='space-y-5 md:w-[30rem]'>
           <div className='space-y-2'>
           <h1 className='text-white md:text-6xl text-4xl font-bold drop-shadow-2xl md:text-left text-center'>FOOT O SCOPE</h1>
           <h5 className='md:tracking-[.58rem] tracking-[.17rem] text-xs  heading_tagline font-bold text-slate-500 md:text-left text-center'>BRINGING JOY THROUGH REELS</h5>
           </div>

            <p className='text-slate-700'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>

            <div className='space-x-5 space-y-2 '>
              <button className=' bg-[#e43832] hover:bg-[#750905] duration-500 px-4 py-2 rounded-md text-white'> 
              <a href='https://www.youtube.com/@FootOscope' target='_blank' className='flex items-center'>SUBSCRIBE <ImPlay className='ml-2 text-2xl' /></a>
               </button>
               <button className='inline bg-[#3b5998] hover:bg-[#082462] duration-500 px-4 py-2 rounded-md text-white'> 
              <a href='https://www.facebook.com/footopublic' target='_blank' className='flex items-center'>FOLLOW <AiOutlineWifi className='ml-2 text-2xl follow_btn' /></a>
               </button>
            </div>

        </div>
        <div>
          <img src={logo} alt='header Image' className='h-96' />
        </div>
    </header>
    </>
  )
}

export default Head_Section
