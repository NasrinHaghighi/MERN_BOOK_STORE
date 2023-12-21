import React from 'react'
import {ShowFiltersBox, InnerBox, Label} from './styles'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'


function ShowFilters() {
    const categorySelected =useAppSelector((state=>state.category.category))
    const priceSelected = useAppSelector((state=>state.price.price))
    const rateSelected = useAppSelector((state=>state.rate.rate))
  return (
    <ShowFiltersBox>
        <InnerBox>Category : <Label> {categorySelected === ' ' ? 'All' : categorySelected.toUpperCase()} </Label> </InnerBox>

        <InnerBox>Price:  <Label> {priceSelected[0] }  - {priceSelected[1] } </Label></InnerBox>
        <InnerBox>Rate :  <Label>  { rateSelected} </Label></InnerBox>
    </ShowFiltersBox>
  )
}

export default ShowFilters