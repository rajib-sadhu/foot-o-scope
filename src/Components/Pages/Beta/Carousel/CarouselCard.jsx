import React from 'react';
import testImage from './test-image.webp';

const CarouselCard = ({data}) => {
    const {title, backgroundImage, releaseYear, synopsis, tags} = data;

  return (
        <div className=''>
            <div style={{backgroundImage:`url(${backgroundImage.url})`}} className='movie md:h-[30rem] h-[18rem] md:w-4/5 bg-cover '>
                <div className='grid md:grid-cols-2 grid-cols-1 text-white h-full p-5 bg-gradient-to-tr from-black to-transparent '>
                    <div>

                    </div>

                    <div className=' text-right md:p-10 flex flex-col md:gap-5 gap-1 md:justify-start justify-end'>
                        <h1 className='md:text-6xl text-3xl'>{title}</h1>
                        <p className='md:text-lg text-xs'> {synopsis} </p>
                    </div>

                    <div className='md:col-span-2 grid grid-cols-2 '>
                        <div className='gap-3 flex items-end md:h-full'>
                        {
                        tags.map((t,i) => <span className='md:px-3 px-1 md:py-1 py-0 text-white md:text-2xl text-xs border font-light border-white' key={i} > {t.name} </span> )
                        }
                        </div>
                        <div className='flex justify-end items-end'>
                            <p className='bg-black hover:bg-white hover:text-black md:text-lg text-xs px-3 py-2' >Release: {releaseYear}</p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>  
  )



}

export default CarouselCard;
