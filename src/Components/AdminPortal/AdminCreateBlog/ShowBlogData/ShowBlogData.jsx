import React from 'react';

import {AiFillDelete, AiFillEdit} from 'react-icons/ai';

import logo from '../../../../assest/images/Icon-FootOScope-logo.svg';



const ShowBlogData = (props) => {

    // Blog Datas
    const {blog_id, blog_title, blog_desc, blog_created_at} = props.value;

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
      // convert Date in local format
      const d = new Date(blog_created_at);
      const date = `${(formatAMPM(d))}, ${d.toLocaleDateString('en-GB')}`;



  return (
    <>
    				<tr>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div className="flex items-center">
										<div className="flex-shrink-0 w-10 h-10">
											<img className="w-full h-full rounded-full"
                                                src={logo}
                                                alt="" />
                                        </div>
											<div className="ml-3">
												<p title={blog_title} className="text-gray-900 whitespace-no-wrap">
													{blog_title /* {blog_title.length>30? blog_title.slice(0,30)+'...': blog_title } */}
												</p>
											</div>
										</div>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p title={blog_desc} className="text-gray-900 whitespace-no-wrap">
                                    {blog_desc /* {blog_desc.length>100? blog_desc.slice(0,100)+'...': blog_desc } */}
                                    </p>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										{date}
									</p>
								</td>
								<td className="p-5 text-center border-b border-gray-200 bg-white text-sm">
									<button title='Delete' className="text-gray-900 whitespace-no-wrap text-xl text-red-600">
										<AiFillDelete/>
									</button>
								</td>
								<td className="p-5 text-center border-b border-gray-200 bg-white text-sm">
                                        <button title='Edit' className="text-gray-900 whitespace-no-wrap text-xl text-green-600">
                                            <AiFillEdit/>
                                        </button>
								</td>
							</tr>
    </>
  )
}

export default ShowBlogData
