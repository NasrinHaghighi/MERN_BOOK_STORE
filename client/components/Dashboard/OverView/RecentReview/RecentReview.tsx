import React from 'react'
import {Box, Title} from '../OrderSale/styles'
import Carousel from 'react-bootstrap/Carousel';
import {CarouselItem , Text,Top ,ImageUser, Info, Name, RateStar} from './styles'
import Rating from '@mui/material/Rating';


function RecentReview() {
    const settings = {
        controls: false,  // Hide the arrows
        indicators: false,  // Hide the dots
        interval: 3000,    // Set auto-play interval in milliseconds (e.g., 3 seconds)
      };
  return (
    <Box>
         <Title>Recent Reviews</Title>
         <Carousel  {...settings}>


            {reviews.map((item)=>{
                return(
                    <CarouselItem>
                        <Top>
                            <ImageUser>{item.user[0]}</ImageUser>
                            <Info>
                                <Name>{item.user}</Name>
                                <RateStar>

                                <Rating name="read-only" value={item.rate} readOnly />
                                </RateStar>
                            </Info>
                        </Top>
                    <Text>{item.text}</Text>
                  </CarouselItem>
                )
            })}
  
    </Carousel>
    </Box>
   
  )
}

export default RecentReview



const reviews=[
    {id:1, user:'Sara' , rate:4.1 , text:'I am very happy whit this book'},
  {id:2, user:'Joa' , rate:5 , text:'I order this book for my friend, arraived on time'},
 {id:3, user:'Pedro' , rate:3 , text:'I did not receive my order'},
]



