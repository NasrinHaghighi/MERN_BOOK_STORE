import React, {useState} from 'react'
import { bookType } from '../../../types/bookType';
import {ConteinerRes, Info, BookPhotoRes, Trash, NameRes ,PriceRes, Amount, PriceSapn, AmountDiv, TotalPriceRes} from './styles'
import { Images } from '../../../helpers/Image';
import { FaTrashAlt } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {addNewAmount, deletItem} from '../../../features/bookSlice'



interface Item{
    item:bookType,
    index:number
  }


function CardItemRes({item}:Item ,{index}:any) {
    const [newAmount, setNewAmount] =useState<number>(item.amount)
    const dispatch=useAppDispatch()


//cahnge the maonut in redux by on chang event//
 const newAmountHandel=(e:any)=>{
  setNewAmount(e.target.value)
 dispatch(addNewAmount({...item, amount:e.target.value}))
 
 }
    
 const handledelet=()=>{
        dispatch(deletItem(item))
      }


  return (
    <ConteinerRes className={index % 2 == 1 ? 'even' : ''}>
           <BookPhotoRes>
          
        <Images
        width={100}
        height={130}
        src={item.imageUrl}
        alt="book"
       />
       
        </BookPhotoRes>
       <Info>
       <NameRes><div>{item.name.length>30 ?item.name.substring(0,30): item.name}</div><Trash onClick={()=>handledelet()}><FaTrashAlt /></Trash></NameRes>
       <PriceRes><PriceSapn>Price</PriceSapn><span>{item.price},00 €</span></PriceRes>
       <AmountDiv><PriceSapn>Amount</PriceSapn>
       <Amount type="number" min="1" max='10'  value={newAmount} onChange={(e)=>newAmountHandel(e)}/></AmountDiv>
        
        <TotalPriceRes><PriceSapn>Total Price</PriceSapn><span>{item.amount*item.price},00 e</span></TotalPriceRes>
        
       </Info>
    </ConteinerRes>
  )
}

export default CardItemRes