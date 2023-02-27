import React,{useState} from 'react'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'

import {Conatiner, TitleBtn} from '../CategoryFilter/styles'
import {PriceSlider, Text} from './styles'
import Slider from '@mui/material/Slider';



function valuetext(value: number) {
    return `${value}°C`;
  }
function PriceFilter() {
    const [show, setShow] =useState(false)
    const [value, setValue] = React.useState<number[]>([10,100]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    
  };
 
  return (
    <Conatiner>
       <TitleBtn onClick={()=>setShow(!show)} className={show ?'show' : ''}>Price</TitleBtn>
      <PriceSlider className={show ? 'active': 'unActive'}>
      <Slider
        
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
<Text>Price: ${value[0]} __ ${value[1]}</Text>
      </PriceSlider>
      
       
    </Conatiner>
  )
}

export default PriceFilter