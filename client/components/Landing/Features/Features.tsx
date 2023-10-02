import React, {useState, useEffect} from 'react'
import { fetchFeatures} from '../../../utiles';

import {Flex, ListConatiner, FlexConatiner, SwiperSlideStyled, SwiperS} from './styles'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Images } from "../../../helpers/Image";
import { Books } from "../../../constants/MOCK_DATA";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { bookType } from '../../../types/bookType';


export interface Item{
    id:string,
    etag:string,
    volumeInfo:{
      description:string,
      pageCount:number,
        title:string,
        subtitle:string,
        authors:string[],
        categort:string[]
        imageLinks:{
            smallThumbnail:string,
            thumbnail:string
        }
          
    }
}

function Features({id}:any) {
  
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Function to update screenWidth
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Initial call to set screenWidth
    updateScreenWidth();

    // Add an event listener to update screenWidth when the window is resized
    window.addEventListener('resize', updateScreenWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  //console.log(screenWidth)
  const [data, setdata] =useState<any>([])
  function sliceIntoChunks(arr:any, chunkSize:number) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

useEffect(()=>{
 var newArr =sliceIntoChunks(Books, 3)
setdata(newArr)
},[])
 
//console.log(data)
  return (
    <FlexConatiner id={id}>
      <Flex>
        <h2>Featured Books</h2>
   <ListConatiner>

   <SwiperS
   navigation={true}
   modules={[Navigation]}
    
      spaceBetween={50}
      slidesPerView={screenWidth >1200 ? 2.8 : 1.3 }
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data?.map((item:[])=>{
        
return  <SwiperSlideStyled>
  {item.map((m:any)=>{
    return <div><Images src={m.image} width={350} height={400}   alt="book"/></div>
  })}

</SwiperSlideStyled>
      })}

    </SwiperS>
    </ListConatiner>
    </Flex>
    </FlexConatiner>
  )
}

export default Features