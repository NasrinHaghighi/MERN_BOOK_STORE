import React from 'react'
import {Box, Title, Amount, Overview, IconDiv, TitleNum} from './styles'
import {BsBasket} from 'react-icons/bs'
import {PiNewspaperClippingLight} from 'react-icons/pi'

interface Props{
    sale:string | null
}


function OrderSale({sale}:Props) {
  return (
    <Box>
    <IconDiv>{sale ?<PiNewspaperClippingLight /> : <BsBasket />}</IconDiv>    
        <Title>{sale ?'Sales' : 'Orders'}</Title>
        <Amount><TitleNum>{sale ? '450.758 $' : 85}</TitleNum> </Amount>
        <Overview>Over last month 1.4% </Overview>
    </Box>
  )
}

export default OrderSale