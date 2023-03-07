import React,{useState} from 'react'
import {Conatiner, TitleBtn, ListItem} from '../CategoryFilter/styles'
import {RateContainer} from './styles'
import Rating from '@mui/material/Rating';
import {selectedRate} from '../../../../features/rateSlice'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'


function RateFilter() {
    const [show, setShow] =useState(false)
    const [value, setValue] = React.useState<number | null>(2);
    const dispatch=useAppDispatch()
const saveRate=(v:any)=>{
setValue(v)
dispatch(selectedRate(v))
}

  return (
    <Conatiner>
    <TitleBtn onClick={()=>setShow(!show)} className={show ?'show' : ''}>By Review</TitleBtn>
    <RateContainer className={show ? 'active': 'unActive'}>
    
         <Rating
         size="large"
        name="half-rating"
        value={value}
        onChange={(event, newValue) => {saveRate(newValue)   }}
      />
   
  
     </RateContainer>
 </Conatiner>
  )
}

export default RateFilter