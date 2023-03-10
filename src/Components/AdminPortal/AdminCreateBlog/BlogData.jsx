import React, { useEffect, useState } from 'react'
import ShowBlogData from './ShowBlogData/ShowBlogData';


const BlogData = () => {

    const [isLoading, setIsLoading ] =useState(true);

  const [blogData, setData] = useState([]);


    const API = 'https://quaint-ray-gear.cyclic.app/admin/blog';


    const fetchApiData = async (url) =>{
  
      try{
  
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        setData(data);
        data.sort((a, b) => new Date(b.blog_created_at) - new Date(a.blog_created_at));
        setIsLoading(false);
  
      }
      catch(error){
        console.error(error);
      }
    }
  
    useEffect(()=>{
  
      fetchApiData(API);
  
    },[]);

      // API Loading Animation
        if(isLoading){
            return (<>  
            <div className='flex items-center justify-center'>
                <div style={{borderTopColor:'transparent'}} className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
                <p className="ml-2">Loading...</p>
            </div>
            </>)
        }



  return (
    <>
    {/* <!-- component --> */}
    <div className="bg-white md:p-8 p-3 rounded-md w-full">
	<div className=" flex items-center justify-between pb-6">
		<div>
			<h2 className="text-gray-600 font-semibold">CRUD Blog Data</h2>
			<span className="text-xs">All Blog item</span>
		</div>
		<div className="flex items-center justify-between">
			<div className="flex bg-gray-50 items-center p-2 rounded-md">
				<input className="bg-gray-100 outline-none ml-1 block " type="text" name="" id="" placeholder="search..." />
          </div>
				{/* <div className="lg:ml-40 ml-10 space-x-8">
					<button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New Report</button>
					<button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Create</button>
				</div> */}
		  </div>
		</div>
		<div>
			<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
				<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
					<table className="min-w-full leading-normal">
						<thead>
							<tr>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Titles
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Descriptions
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Created at
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Delete
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Update
								</th>
							</tr>
						</thead>
						<tbody>
                            {/* Each Items */}

                            {
                                blogData.map((val)=><ShowBlogData value={val} />)
                            }

						</tbody>
					</table>
					{/* <div
						class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
						<span class="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 4 of 50 Entries
                        </span>
						<div class="inline-flex mt-2 xs:mt-0">
							<button
                                class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
							&nbsp; &nbsp;
							<button
                                class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                                Next
                            </button>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default BlogData;
