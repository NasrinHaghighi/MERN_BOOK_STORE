import React ,{useState, useEffect}from 'react'
import {SliderItemontainer, Left, Right, Title, SeeMore} from './styles'
import { Images } from '../../../helpers/Image'




function SliderItem({item, index,active}:any) {
    const [show, setShow] =useState(false)
    console.log(active)

    
  return (
    <SliderItemontainer >

        <Left >
        <Title className={active===index ? 'active' :''}>{item.title}
        <div> {item.subtit}</div>
        </Title>
        <SeeMore className={active===index ? 'active' :''}>See More</SeeMore>

        </Left>
        <Right className={active===index ? 'active' :''}>
        <Images src={item.img} width={700} height={400}   alt="book"/>
        </Right> 
    </SliderItemontainer>
  )
}

export default SliderItem