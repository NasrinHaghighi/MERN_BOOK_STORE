import React from 'react'
import {Box, Price, Discont, Final} from './styles'




interface Props{
    price:number, 
    discont:number
}




function PriceBydiscont({price, discont}:Props) {
    const final=price-(price*discont)/100
  return (
    <Box>
        <div style={{display:'flex'}}><Discont>{discont}%</Discont></div>
         <Final>{final}$</Final>
    </Box>
  )
}

export default PriceBydiscont