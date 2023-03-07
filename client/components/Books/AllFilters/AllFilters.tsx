import React,{useEffect, useState} from 'react'
import { fetchData } from '../../../utiles';
import {Conatiner, Title, CategoryList, CategoryItem} from './styles'

import CategoryFilter from './CategoryFilter/CategoryFilter';
import PriceFilter from './PriceFilter/PriceFilter';
import RateFilter from './RateFilter/RateFilter';


function AllFilters() {

   
  return (
    <>
    <Conatiner>
      <CategoryFilter />
      <PriceFilter />
      <RateFilter />
   </Conatiner>
    </>
  )
}

export default AllFilters


// <Title>Category</Title>
// <CategoryList>
//  {category.map((item)=>{
//     return <CategoryItem key={item.tit} onClick={()=>handelSelectcategory(item.value)}>{item.tit}</CategoryItem>
// })} 
// </CategoryList>