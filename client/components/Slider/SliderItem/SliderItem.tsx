/**
 * SliderItem component renders a slide item with title, subtitle, 
 * image and see more link.
 * 
 * It takes in props for the slide item data, index and active slide index. 
 * Uses useState hook to track expanded state. Renders conditional classes
 * and styling based on active prop.
 */
import React, { useState, useEffect } from 'react'
import { SliderItemontainer, Left, Right, Title, SeeMore } from './styles'
import { Images } from '../../../helpers/Image'

function SliderItem({ item, index, active }: any) {
  const [show, setShow] = useState(false)
  console.log(active)

  return (
    <SliderItemontainer >

      <Left >
        <Title className={active === index ? 'active' : ''}>{item.title}
          <div> {item.subtit}</div>
        </Title>
        <SeeMore className={active === index ? 'active' : ''}>See More</SeeMore>

      </Left>
      <Right className={active === index ? 'active' : ''}>
        <Images src={item.img} width={600} height={400} alt="book" />
      </Right>
    </SliderItemontainer>
  )
}

export default SliderItem