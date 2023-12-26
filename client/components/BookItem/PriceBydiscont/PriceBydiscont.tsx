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
        <div style={{display:'flex'}}><Discont>{discont}%</Discont> <Final>{final} €</Final></div>
        
    </Box>
  )
}

export default PriceBydiscont