import React from "react";

export default function BlogModal(props) {

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

    // console.log(props.modalValue)
    const {blog_id, blog_title, blog_desc,blog_tag_name, blog_created_at} = props.modalValue;

    const d = new Date(blog_created_at);
     const date = `${(formatAMPM(d))}, ${d.toLocaleDateString()}`;



  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center" onDoubleClick={props.handleClose}>

      <div className="bg-white p-5 rounded w-9/12 space-y-3 h-3/4 flex flex-col justify-between">
        <div className="h-50">
            <img className="md:h-52 mx-auto" src="https://i.ibb.co/swtG2vY/FOOT-O-SCOPE-PRESENT-1.png" />
            <p className={`${blog_tag_name? `bg-[#b7f3ff]` : `bg-white h-[1.4rem]` } text-[.6rem] text-black md:ml-5 pt-1.5 pr-3 pb-1.5 pl-3
                  rounded rounded-5 uppercase inline-block `}>{blog_tag_name}</p>
        </div>
       <div className="md:px-10 space-y-3 md:h-56 h-full overflow-hidden overflow-scroll overflow-x-hidden">
       <h1 className="font-semibold  text-xl text-gray-700">
          {blog_title}
        </h1>
        <div className="">
        <p className="overflow-hidden overflow-x-hidden text-gray-700 mb-5">
            {blog_desc}
        </p>
        </div>
       </div>
       {/* Footer */}
       <div className="flex justify-between md:px-5">
       <div className=' text-slate-500 md:text-sm text-xs space-y-2'>
              <h2>- <span>{date}</span> - </h2>
        </div>
        <div className="">
          <button onClick={props.handleClose} className=" px-5 py-2 bg-gray-700 text-white bg-red-700 rounded">
            Close
          </button>
        </div>
       </div>
      </div>
    </div>
  );
}