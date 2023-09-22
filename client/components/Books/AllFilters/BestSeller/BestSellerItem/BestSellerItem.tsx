
import React from 'react'
import {Box} from './styles'
import {Images} from '../../../../../helpers/Image'



interface Item{
    id: number;
    title: string;
    author: string;
    price: number;
    descriptin: string;
    image: string;
    icon: string;
    face: string;
    rating: number;
}
interface ItemProps{
    item:Item
}
function BestSellerItem({item}:ItemProps) {
  return (
    <Box>
        <Images src={item.image} key={item.id} width={80} height={80} alt="book"/>
        <p>{item.title}</p>
    </Box>
  )
}

export default BestSellerItem