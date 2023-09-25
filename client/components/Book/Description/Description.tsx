import React from 'react'
import { bookType } from '../../../types/bookType'
import {Tit, Text, Category, Cate} from './styles'
interface ItemProps{
    item?:bookType
  }

  
function Description({item}:ItemProps) {
   // console.log(item)
  return (
    <>
    <div>book discription</div>
    {/* <Tit>About book "{item?.volumeInfo.title}"</Tit>
    <Cate>Category :<Category> {item?.volumeInfo.categories}</Category></Cate>

    <Text>{item?.volumeInfo.description}</Text> */}

    </>
  )
}

export default Description