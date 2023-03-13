import React,{useEffect, useState} from 'react'
import { fetchData } from '../../../utiles';
import {Conatiner, }from './styles'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import CategoryFilter from './CategoryFilter/CategoryFilter';
import PriceFilter from './PriceFilter/PriceFilter';
import RateFilter from './RateFilter/RateFilter';
import BestSeller from './BestSeller/BestSeller';
import { ResetFiltersBtn} from '../ResetFilters/styles'
import { Box} from './styles'


//***reset function */

import {resetcategory} from '../../../features/CategorySlice'
import {resetPage} from '../../../features/PageSlice'
import {resetPrice} from '../../../features/priceFilter'
import {resetRate} from '../../../features/rateSlice'
import {resetSortby} from '../../../features/sortSlice'
//***reset function */

function AllFilters() {
  const dispatch=useAppDispatch()
  const resetHandel=()=>{
   dispatch(resetcategory())
   dispatch(resetPage())
   dispatch(resetPrice())
   dispatch(resetRate())
   dispatch(resetSortby())
  }
   
  return (
    <>
    <Conatiner>
      <CategoryFilter />
      <PriceFilter />
      <RateFilter />
      <BestSeller />
      <Box>
      <ResetFiltersBtn onClick={resetHandel}>Reset all filters</ResetFiltersBtn>
      </Box>
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