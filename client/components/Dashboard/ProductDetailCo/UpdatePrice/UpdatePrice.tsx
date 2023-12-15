import React ,{useState}from 'react'
import {Box, Title, Main, Price, Span,CheckBoxDiv} from './styles'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Grid } from '@mui/material';

import axios from 'axios';

function UpdatePrice({discount, price, id}:any) {
   const[ checked, setChecked ]=useState(discount)

const final=price-(price*checked)/100
/******************change check box handeler */
   const handleCheckboxChange = async(lable: number, id:number) => {
   // console.log(lable, id)
   setChecked(lable)
   { toast(`discount of product changed `,{
    draggable:true,
    position:toast.POSITION.TOP_RIGHT
  })
 }
 try{

   const res =await axios.patch(`http://localhost:4000/api/v1/books/${id}`,
    {
     discont: lable 
     },
   {
     headers: {
       "Content-Type": "application/json"
     }}
   )
   console.log(res) 
 
}
catch(error){
 console.log(error)
}
  };


  return (
    <Box>
          <ToastContainer draggable={false} autoClose={3000}/> 
        
        <Title>Discount :</Title>
        <br/>
        <Main>
            {arr.map((item, index) =>{
                return  (
                    <CheckBoxDiv key={index}> 
                        <label htmlFor={`myCheckbox-${index}`} style={{marginRight:5}}>{item.label} %</label>
                        <input
              type="radio"
              id={`myCheckbox-${index}`}
              checked={item.label ===  checked}
              onChange={() => handleCheckboxChange(item.label,id)}
            />
                   </CheckBoxDiv>
                )
              
            })}
   
        </Main>
        <hr/>
        <Grid container spacing={2}>
            <Grid item lg={6} md={12} sm={12}>
            <Price className='init'>Initial price : <Span> {price} €</Span></Price>
            </Grid>
            <Grid item lg={6} md={12}>
        <Price className='final'>Final price : <Span> {final ? final :price} €</Span></Price>
        </Grid>
        </Grid>
     
    </Box>
  )
}

export default UpdatePrice



const arr =[
    {id:1 , label:0, },
    {id:2 , label:10, },
    {id:3 , label:20, },
    {id:4 , label:30, },
]