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

    console.log(props.modalValue)
    const {blog_id, blog_title, blog_desc, blog_created_at} = props.modalValue;

    const d = new Date(blog_created_at);
     const date = `${(formatAMPM(d))}, ${d.toLocaleDateString()}`;



  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center" onDoubleClick={props.handleClose}>
      <div className="bg-white p-5 rounded w-9/12 space-y-3">
        <div className="h-50">
            <img className="md:h-52 mx-auto" src="https://i.ibb.co/swtG2vY/FOOT-O-SCOPE-PRESENT-1.png" />
        </div>
        <h1 className="font-semibold  text-xl text-gray-700">
          {blog_title}
        </h1>
        <p className=" text-gray-700 mb-5">
            {blog_desc}
        </p>
        <div className='text-right text-slate-500 text-sm'>
                      <h2>Posted - <span>{date}</span> </h2>
                    </div>
        <div className="text-right">
          <button onClick={props.handleClose} className=" px-5 py-2 bg-gray-700 text-white bg-red-700 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}