import React from 'react'
import useReleatedBook from '../../../hooks/useReleatedBook';
import { useRouter } from 'next/router';
import BookItem from '../../BookItem/BookItem';
import {Box, BookBox} from './styles'
import Link from 'next/link'
import { bookType } from '../../../types/bookType';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface Props {
    bookcategory: string | undefined;
    item:bookType | undefined;
}



function RelatedBook({bookcategory, item}:Props) {
    const settings = {
      
        infinite: true,
        speed: 500,
        autoplay: true, 
        autoplaySpeed: 3000,
        slidesToShow:4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint:750,
            settings: {
              slidesToShow: 1,
            },
          },]
      };
    /*we need to get id from url to filter book by this id from realted books*/
    const router = useRouter();
    const  id  = router.query.bookid; 
    const data = useReleatedBook({bookcategory})

    const relatedItems = data.books?.filter((item:any) => {
    return item._id !== id;

    })
  
  return (
<>


<Box>
<h1>Related Books</h1>
{/* <Slider {...settings}> */}
<BookBox>
{relatedItems?.slice(0,3)?.map((item:any, i:number) => {

    return (
  
            <BookItem key={i} item={item} />
            
           
   
    )
})}
 </BookBox>
 {/* </Slider> */}


 </Box>
</>
  )
}

  
export default RelatedBook