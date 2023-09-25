import React from 'react'
import {Container, Title} from './styles'
import { bookType } from '../../../../types/bookType'


 interface ItemProps{
     item?:bookType
   }


function Authores({item}:ItemProps) {
  return (
    <Container>
        {/* <Title>Authores</Title>
        {item?.volumeInfo.authors ? item.volumeInfo.authors.map((a)=>{
return <h3>{a}</h3>
        }): ' '} */}
    </Container>
  )
}

export default Authores