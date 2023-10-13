import React from 'react'
import Grid from '@mui/material/Grid';

import {Title, Box,Num,  Tit, SubTit, Container, First, Second, Button, Status} from './styles'
import { BsBorder } from 'react-icons/bs';


function OrderDetails({order}:any) {


const updateOrder =(id:number, value:string)=>{
console.log(id, value)
}

  
  return (
    <Box>
    <Title>Order No :  <Num>#{order.order._id}</Num></Title>
    <Title>Status: <Status>{order.order.status}</Status> </Title>

    {/* Status funct */}
    <Grid container spacing={2}>
      {btnArr.map((item)=>{
          return   <Grid item lg={3} md={6} xs={12}>  
           <Button
           onClick={()=>updateOrder(order.order._id, item.value)} 
           className={item.value}>
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
      <SubTit>{order.order.createdAt.split('T')[0]}</SubTit>
  </Grid>
  <Grid item  lg={3} md={6} xs={12}>
     <Tit>Name</Tit>
      <SubTit>{order.order.name}</SubTit>
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
  )
}

export default OrderDetails


const btnArr=[
  {id:1, value:'processing' , text:'Processing'},
  {id:2, value:'shipped' , text:'Shipped'},
  {id:3, value:'completed' , text:'Completed'},
  {id:4, value:'cancelled' , text:'Cancelled'},
]