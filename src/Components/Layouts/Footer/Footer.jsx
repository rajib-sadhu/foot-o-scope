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
        <li className='hover:text-sky-400' > <a href="#">Home</a> </li>
        <li className='hover:text-sky-400' > <a href="#">Blogs</a> </li>
        <li className='hover:text-sky-400' > <a href="#">Videos</a> </li>
        <li className='hover:text-sky-400' > <a href="#">Photos</a> </li>
        <li className='hover:text-sky-400' > <a href="#">About</a> </li>
        <li className='hover:text-sky-400' > <a href="#">Contact</a> </li>
      </ul>

      <div className='flex justify-center py-5'>
        <img src={logo} alt="logo" className='md:h-24 h-16' />
      </div>

      <ul className='flex justify-between md:px-96 px-8'>
        <li><a href="#" className='' >
           <img src={fb} alt="" className='mx-auto mb-2' />
           Facebook
        </a>
        </li>
        <li><a href="#" className='' >
        <img src={insta} alt="" className='mx-auto mb-2' />
        Instagram
        </a>
        </li>
        <li><a href="#" className='' >
        <img src={tweet} alt="" className='mx-auto mb-2' />
        Twitter
        </a>
        </li>
        <li><a href="#" className='' >
        <img src={yt} alt="" className='mx-auto mb-2' />
        Youtube
        </a>
        </li>
      </ul>

      <p className='text-center'> © Copyright 2023 by Refsnes Data. All Rights Reserved. Foot O Scope is Powered by David RS.  </p>

    </footer>
  )
}

export default Footer
