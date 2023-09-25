import React,{useState, useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'

import {Conatiner, TitleBtn} from '../CategoryFilter/styles'
import {PriceSlider, Text, StyledSlider} from './styles'
import Slider from '@mui/material/Slider';
import {selectedPrice} from '../../../../features/priceFilter'


function valuetext(value: number) {
    return `${value}°C`;
  }



function PriceFilter() {
    const reduxPrice=useAppSelector(state=>state.price.price)
    //console.log(reduxPrice)
    const [show, setShow] =useState(false)
    const [value, setValue] = React.useState<number[]>(reduxPrice);
   const dispatch=useAppDispatch()

useEffect(() => {
  setValue(reduxPrice)
}, [reduxPrice])

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
   dispatch(selectedPrice(value))
    
  };
 
  return (
    <div>react rang</div>
//     <Conatiner >
//        <TitleBtn onClick={()=>setShow(!show)} className={show ?'show' : ''}>Price</TitleBtn>
//       <PriceSlider className={show ? 'active': 'unActive'}>
//       <StyledSlider
//         getAriaLabel={() => 'Temperature range'}
//         value={value}
//         onChange={handleChange}
//         getAriaValueText={valuetext}
//         min={5}
//       max={50}
       
//       />
// <Text>Price: ${value[0]} __ ${value[1]}</Text>


//       </PriceSlider>
      
       
//     </Conatiner>
  )
}

export default PriceFilter