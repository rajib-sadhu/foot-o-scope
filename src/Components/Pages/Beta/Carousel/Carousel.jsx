import React, { useEffect, useState } from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import CarouselCard from './CarouselCard';


import './CarouselStyle.css';




const CarouselDiv = () => {

    const [myData, setMyData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd34ae77cf0msh14ff28c0d59bc88p149894jsn24bc694c6800',
		    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const fetchData = async () => {

        const url = `https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en`;

        try {
            const res = await fetch(url, options)
            const data = await res.json();
            console.log(data.titles.slice(0,10));
            const sliceData = data.titles.slice(0,10)
            setMyData(sliceData)

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };



    return (
        <section className='flex justify-center'>
            <Carousel className='w-screen' responsive={responsive} showDots={true}  autoPlaySpeed={3500} autoPlay={true} rewind={true}  >
            {
                myData.map(item => {
                    console.log(item.jawSummary)
                    return <CarouselCard key={item.jawSummary.id} data={item.jawSummary} />
                })
            }
            {/* <CarouselCard /> */}
        </Carousel>
        </section>
    );
};

export default CarouselDiv;