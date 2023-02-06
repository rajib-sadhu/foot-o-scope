import React, { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';



//CSS Link
import './Header.css';


//assests links
import logo from '../../../assest/images/Text-FootOScope-logo.png';



function Header() {


  const [menuIcon, setMenuIcon] = useState(false);
  const [menuClass1 , setmenuClass1] =useState("");

  const openkMenu =() =>{
    setMenuIcon(true);
    setmenuClass1("top-[50px] opacity-100");
  }

  const closeMenu = () =>{
    setMenuIcon(false);
    setmenuClass1("");
  }


  return (
    <>
       <nav class="md:p-10 p-5 bg-[#00B5FF] w-full md:flex md:items-center md:justify-between navbar z-[5] fixed">
    <div class="flex justify-between items-center bg-[#00B5FF]" >
      <span class="">
        <a href="/home"> 
        <img class="md:h-10 h-6 inline drop-shadow-xl z-[5]" src={logo} /> </a>
      </span>
      <span class="text-3xl cursor-pointer mx-2 md:hidden block z-[5]">
         { menuIcon ? <AiOutlineClose onClick={closeMenu} /> : <GiHamburgerMenu onClick={openkMenu} name="menu" /> }
      </span>
    </div>

    <ul class={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-[#00B5FF] w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ${menuClass1}`}>
      <li class="mx-4 my-6 md:my-0">
        <a href="/home" class="text-xl hover:text-black duration-500">HOME</a>
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a href="#" onClick={()=>alert("This page is not ready..")} class="text-xl hover:text-black duration-500">BLOG'S</a>
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a href="#" onClick={()=>alert("This page is not ready..")} class="text-xl hover:text-black duration-500">VIDEOS</a>
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a href="#" onClick={()=>alert("This page is not ready..")} class="text-xl hover:text-black duration-500">PHOTOS</a>
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a href="#" onClick={()=>alert("This page is not ready..")} class="text-xl hover:text-black duration-500">ABOUT</a>
      </li>

      <button class="bg-[#e43832] text-white duration-500 px-6 py-2 mx-4 hover:bg-red-800 rounded ">
        <a href="https://www.youtube.com/@FootOscope" target="_blank"> SUBSCRIBE </a>
      </button>
      

    </ul>
  </nav>

    </>
  );
}

export default Header;


{/* <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}



{/* <Navbar bg="light" expand="lg">
<Container>
  <Navbar.Brand href="#home">
    <img style={{width:'12rem'}} src={logo} alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Blogs</Nav.Link>
      <Nav.Link href="#link">Videos</Nav.Link>
      <Nav.Link href="#link">Photos</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar> */}