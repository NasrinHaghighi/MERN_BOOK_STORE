import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';

import {Title, Box,Num,  Tit, SubTit, Container, First, Second, Button, Status} from './styles'
import { BsBorder } from 'react-icons/bs';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function OrderDetails({order}:any) {

 const [activeBtn, setActiveBtn] =useState<undefined | string>(order.order.status )
useEffect(() => {
setActiveBtn(order.order.status)
}, [])
console.log(activeBtn)
const updateOrder = async(id:number, value:string)=>{
  setActiveBtn(value)
  { toast(`Status of order changed `,{
      draggable:true,
      position:toast.POSITION.TOP_RIGHT
    })
   }
  try{
   // const updateData = { status: value }
    const res =await axios.patch(`http://localhost:4000/api/v1/orders/${id}`, {
       status: value 
    },
    {
      headers: {
        "Content-Type": "application/json"
      }}
    )
    console.log(res) 
  
}
catch(error){
  if(error){
   toast('This email is aleady exists',{
     draggable:true,
     position:toast.POSITION.TOP_RIGHT
   })
  }
}
}

  
  return (
   <>
    <Box>
        <ToastContainer draggable={false} autoClose={3000}/> 
        <br/>
    <Title>Order No :  <Num>#{order.order._id}</Num></Title>
   
    <hr/>
    <br/>
    <Status>Status:  </Status>

    {/* Status funct */}
    <Grid container spacing={2}>
      {btnArr.map((item)=>{
          return   <Grid item lg={3} md={6} xs={12}>  
           <Button
           onClick={()=>updateOrder(order.order._id, item.value)} 
           className={`${item.value} ${activeBtn === item.value ? 'active' : ''}`}>
            {item.text}
            
            </Button>  </Grid>
      })}
    
    </Grid>
    <br/>
    <hr/>
    <br/>
    <Grid container spacing={2}>
  <Grid item lg={3} md={6} xs={12}>
     <Tit>Order Created at</Tit>
      <SubTit>{order.order.orderedBook.createdAt.split('T')[0]}</SubTit>
  </Grid>
  <Grid item  lg={3} md={6} xs={12}>
     <Tit>Name</Tit>
      <SubTit>{order.order.signinUser}</SubTit>
  </Grid>
  <Grid item  lg={3} md={6} xs={12}>
     <Tit>Email</Tit>
      <SubTit>abc@gmail.com</SubTit>
  </Grid>
  <Grid item  lg={3} md={6} xs={12}>
     <Tit>Contact</Tit>
      <SubTit>916 112 7371</SubTit>
  </Grid>
</Grid>
<br/>
    <hr/>
    <br/>
<Grid container spacing={2} >
<Grid item  md={6} xs={12} >
  <Container>
     <Tit>Delivery Address</Tit>
     <First>Porto, Portugal</First>
     <Second>Av. Boavista</Second>
     </Container>
  </Grid>
  <Grid item  md={6} xs={12} >
  <Container>
  <Tit>Payment Status</Tit>
     <First>Activo Bank</First>
     <Second>No: PT508045869325148</Second>
     </Container>
     
     
  </Grid>
</Grid>
  
    </Box>
    </>
  )
}

export default OrderDetails


const btnArr=[
  {id:1, value:'procssing' , text:'Processing'},
  {id:2, value:'shipped' , text:'Shipped'},
  {id:3, value:'completed' , text:'Completed'},
  {id:4, value:'cancelled' , text:'Cancelled'},
]