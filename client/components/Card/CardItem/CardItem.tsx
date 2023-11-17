import React ,{useState}from 'react'

import {CardItemContainer, Trash,Name,Price,  Amount, TotalPrice, BookPhoto } from './styles'
import { FaTrashAlt } from "react-icons/fa";
import { Images } from '../../../helpers/Image';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {addNewAmount, deletItem} from '../../../features/bookSlice'
import { bookType } from '../../../types/bookType';
import axios from 'axios';
import { string } from 'yup';



interface Item{
  item:bookType,
  index:number
}


function CardItem({item, index}:Item) {
const [newAmount, setNewAmount] =useState<number>(item.amount)
const userId=useAppSelector((state)=>state.user.userId)
const dispatch=useAppDispatch()


//cahnge the maonut in redux by on chang event//
 const newAmountHandel=(e:any)=>{
  
   setNewAmount(e.target.value)
 dispatch(addNewAmount({...item, amount:e.target.value}))
 
 }
 const handledelet=async()=>{
  const productId = item._id;
   dispatch(deletItem(item))
   try{
    let res = await axios.delete(`http://localhost:4000/api/v1/cart/${userId}`,  {data: { productId: productId }})
      
    console.log(res)
  }catch(error){}
 }

  return (
    <>
    <CardItemContainer className={index % 2 == 1 ? 'even' : ''}>
        <Trash onClick={()=>handledelet()}><FaTrashAlt /></Trash>
        <BookPhoto>
        <Images
        width={60}
        height={82}
        src={item.imageUrl}
        alt="book"
       />
        </BookPhoto>
        <Name>{item.name}</Name>
        <Price>{item.price},00 €</Price>
        
        <Amount type="number" min="1" max='10'  value={newAmount} onChange={(e)=>newAmountHandel(e)}/>
        
         <TotalPrice>{item.amount*item.price},00 e</TotalPrice> 
    </CardItemContainer>
  
   
    </>
  )
}

export default CardItem