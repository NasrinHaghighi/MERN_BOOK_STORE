import React from 'react'
import {Box, ResetFiltersBtn} from './styles'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {resetcategory} from '../../../features/CategorySlice'
import {resetPage} from '../../../features/PageSlice'
import {resetPrice} from '../../../features/priceFilter'
import {resetRate} from '../../../features/rateSlice'
import {resetSortby} from '../../../features/sortSlice'
function ResetFilters() {
    const dispatch=useAppDispatch()
    const resetHandel=()=>{
     dispatch(resetcategory())
     dispatch(resetPage())
     dispatch(resetPrice())
     dispatch(resetRate())
     dispatch(resetSortby())
    }
  return (
    <Box>
        <p>Ops! No books based on your search filter....</p>
        <ResetFiltersBtn onClick={resetHandel}>Reset all filters</ResetFiltersBtn>
    </Box>
  )
}

export default ResetFilters   



