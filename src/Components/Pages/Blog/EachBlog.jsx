import React, { useState } from 'react';

// Import Modal
import BlogModal from './Modal/Modal';



const EachBlog = (props) => {

    // for Modal
    const [setModalValue, isSetModalValue ] =useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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

    // props data
    const {blog_id, blog_title, blog_desc, blog_tag_name , blog_created_at} = props.data;


              // convert Date in local format
              const d = new Date(blog_created_at);
              const date = `${(formatAMPM(d))}, ${d.toLocaleDateString('en-GB')}`;


  return (
            <>

            {/* Show Modal */}
            {show && <BlogModal handleClose={handleClose} modalValue={setModalValue} />}

        <div className="flex flex-col items-start justify-between col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 p-5">
              <div className='space-y-3'>
              <img
                  src="https://i.ibb.co/swtG2vY/FOOT-O-SCOPE-PRESENT-1.png" className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"/>
              <p className={`${blog_tag_name? `bg-[#b7f3ff]` : `bg-white h-[1.4rem]` } text-[.6rem] text-black pt-1.5 pr-3 pb-1.5 pl-3
                  rounded rounded-5 uppercase inline-block `}>{blog_tag_name}</p>
              <h4 className="text-lg font-bold sm:text-xl md:text-2xl"> {blog_title.length>40? blog_title.slice(0,40)+'...': blog_title } </h4>
              <p className="text-sm text-black"> {blog_desc.length>200? blog_desc.slice(0,200)+'...': blog_desc } </p>
              </div>
              {/* Footer */}
              <div className="pt-2 pr-0 pb-0 pl-0 w-full">
              <button className="bg-[#51636a] hover:bg-[#219ed0] flex items-center leading-none text-xs font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3 rounded-full uppercase ml-auto " 
                        onClick={()=>{
                        handleShow();
                        isSetModalValue(props.data);
                      }} >Details </button>

              {/* <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">Jack Sparrow</a> */}
              <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· {date} ·</p>
              {/* <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">1hr 20min. read</p> */}
              </div>
          </div>
    </>
  )
}

export default EachBlog
