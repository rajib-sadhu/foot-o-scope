import React from 'react';

import logo from '../../../assest/images/Icon-FootOScope-logo.svg';

import fb from '../../../assest/images/Social Logos/Facebook.png';
import insta from '../../../assest/images/Social Logos/Instagram.png';
import tweet from '../../../assest/images/Social Logos/Twitter.png';
import yt from '../../../assest/images/Social Logos/Youtube.png';

const Footer = () => {
  return (
    <footer className='mx-auto md:py-16 py-10 md:px-44 px-6 bg-black text-white space-y-10'>
      
      <ul className='flex justify-between md:px-64 '>
        <li className='duration-200 text-sky-400 hover:text-sky-200' > <a href="/home">Home</a> </li>
        <li className='duration-200 text-sky-400 hover:text-sky-200' > <a href="/blog" >Blogs</a> </li>
        <li className='duration-200 text-sky-400 hover:text-sky-200' > <a href="#" onClick={()=>alert("This Page is not ready.")} >Videos</a> </li>
        <li className='duration-200 text-sky-400 hover:text-sky-200' > <a href="#" onClick={()=>alert("This Page is not ready.")} >Photos</a> </li>
        <li className='duration-200 text-sky-400 hover:text-sky-200' > <a href="#" onClick={()=>alert("This Page is not ready.")} >About</a> </li>
        <li className='duration-200 text-sky-400 hover:text-sky-200' > <a href="#" onClick={()=>alert("This Page is not ready.")} >Contact</a> </li>
        <li className='duration-200 text-sky-400 hover:text-sky-200' > <a href="/admin" >Admin</a> </li>
      </ul>

      <div className='flex justify-center py-5'>
        <img src={logo} alt="logo" className='md:h-24 h-16' />
      </div>

      <ul className='flex justify-between md:px-96 px-0 md:text-md text-sm'>
        <li><a target="_blank" href="https://www.facebook.com/footopublic" className='' >
           <img src={fb} alt="" className='mx-auto mb-2 duration-300 hover:scale-150' />
           Facebook
        </a>
        </li>
        <li><a target="_blank" href="https://www.instagram.com/antar_bose/" className='' >
        <img src={insta} alt="" className='mx-auto mb-2 duration-300 hover:scale-150' />
        Instagram
        </a>
        </li>
        <li><a target="_blank" href="https://twitter.com/Im_Abasu" className='' >
        <img src={tweet} alt="" className='mx-auto mb-2 duration-300 hover:scale-150' />
        Twitter
        </a>
        </li>
        <li><a target="_blank" href="https://www.youtube.com/@FootOscope" className='' >
        <img src={yt} alt="" className='mx-auto mb-2 duration-300 hover:scale-150' />
        Youtube
        </a>
        </li>
      </ul>

      <p className='text-center md:text-lg text-xs'> © Copyright 2023 by Refsnes Data. All Rights Reserved. Foot O Scope is Powered by David RS.  </p>

    </footer>
  )
}

export default Footer
