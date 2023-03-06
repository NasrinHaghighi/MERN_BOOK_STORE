import styled from 'styled-components'
import Slider from '@mui/material/Slider';

export const PriceSlider=styled.div`
padding-top:30px ;
overflow:hidden ; 
margin :10px ;
transition:height 400ms ease ;
&.active{
    height:180px;
 }
&.unActive{
    height: 0;
 }
`
export const Text=styled.div`
text-align:center ;
font-size:20px ;
font-weight:500 ;

`
export const StyledSlider = styled(Slider)`

`