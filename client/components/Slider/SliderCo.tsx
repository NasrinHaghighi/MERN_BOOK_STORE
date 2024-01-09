/**
 * SliderCo component displays a slider/carousel of items.
 * 
 * Imports React hooks and Slider component from react-slick.
 * Renders Slider component with settings and mapped array of slider items.
 * Tracks current active slide index in state.
 * Exports component as default.
*/
import React, { useState, useEffect, useRef } from 'react'
import { Container } from './styles'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from './SliderItem/SliderItem';

const arr = [1, 2, 3, 4, 5]

function SliderCo() {
  const sliderRef = useRef();

  const [active, setActive] = useState(0)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,


    afterChange: (current: any) => setActive(current)
    //beforeChange: () =>setActive(true)
    //setActive(active+1),
    //  beforeChange: () =>
    //  setActive(),
  };

  return (
    <Container>
      <Slider {...settings}>
        {sliderArr.map((item, index) => {
          return <SliderItem item={item} index={index} active={active} />
        })}
      </Slider>
    </Container>
  )
}

export default SliderCo


const sliderArr = [
  { id: 0, title: 'Featured Books of the ', subtit: 'February', img: '/books/books.png' },
  { id: 1, title: 'Educational Book ', subtit: 'For Kids', img: '/books/book2.png' },
  { id: 2, title: 'Featured Books of the ', subtit: 'February', img: '/books/book.png' },


]