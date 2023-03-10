import React,{useState, useEffect} from 'react'

import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import { selectedcategory } from '../../../../features/CategorySlice'
import {Conatiner, TitleBtn, List, ListItem} from './styles'


const category=[
    {tit:'All', value :' '},
    {tit:'Art', value :'art'},
    {tit:'Biography', value :'biography'},
    {tit:'Children Books', value :'children'},
    {tit:'Craft & Hobbies', value:'craft'},
    {tit:'Romance', value:'romance'},
    {tit:'Fantasy', value:'fantasy'},
    {tit:'Historical fiction', value:'historical'},
    {tit:'War', value:'War'},
    {tit:'Short stories', value:'short stories'},
    {tit:'Women’s fiction', value:'Women'},
    {tit:'Mystery', value:'mystery'},

]
function CategoryFilter() {
const categ= useAppSelector(state=>state.category.category)

    const[title, setTitle]=useState(' ')
    const [show, setShow] =useState(false)
useEffect(() => {
  setTitle(categ)
}, [categ])

const handelSelectcategory=(value:string)=>{
        setTitle(value)
        dispatch(selectedcategory(value))
 }
     
const dispatch=useAppDispatch()

  return (
    <Conatiner>
       <TitleBtn onClick={()=>setShow(!show)} className={show ?'show' : ''}>Category</TitleBtn>
      
       <List className={show ? 'active': 'unActive'}>
       {category.map((ca)=>{
        
        return <ListItem className={title === ca.value ? 'activeItem' : ' '} onClick={()=>handelSelectcategory(ca.value)}key={ca.tit}>{ca.tit}</ListItem>
     })}
       </List>
       
    </Conatiner>
  )
}

export default CategoryFilter