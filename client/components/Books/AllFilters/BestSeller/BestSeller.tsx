import React,{useState} from 'react'
import {Conatiner, TitleBtn} from '../CategoryFilter/styles'

import {List} from './styles'
import BestSellerItem from './BestSellerItem/BestSellerItem'

import {bestseller} from '../../../../constants/MOCK_DATA'
function BestSeller() {
    const [show, setShow] =useState(true)
  return (
    <Conatiner >
    <TitleBtn onClick={()=>setShow(!show)} className={show ?'show' : ''}>Best seller</TitleBtn>
    <List className={show ? 'active': 'unActive'}>


    {bestseller.map((item)=>{
      return <BestSellerItem item={item}/>
    })}


       </List>
    </Conatiner>
  )
}

export default BestSeller