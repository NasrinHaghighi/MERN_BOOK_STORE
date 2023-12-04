import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';

import {Title, Box,Num,  Tit, SubTit, Container, First, Second, Button, Status, Delivery, Payment, Label, Titles} from './styles'
import { BsBorder } from 'react-icons/bs';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFetchorderuser from '../../../hooks/useFetchorderuser'
import useGetBookInfoUser from '../../../hooks/useGetBookInfoUser';
import OrderItem from './OrderItem';

function OrderDetails({order}:any) {
  const {_id:id}=order.order
  const userId =order.order.userId
  const {userInfo} =order.order



  const {userOrders, fetchUserOrder } = useFetchorderuser(userId);
  const bookInfo = useGetBookInfoUser({ userOrders });

  useEffect(() => {
    fetchUserOrder()
   }, []);
 
//console.log(bookInfo)

 const [activeBtn, setActiveBtn] =useState<undefined | string>(order.order.status )
useEffect(() => {
setActiveBtn(order.order.status)
}, [])



const updateOrder = async(id:number, value:string)=>{
  setActiveBtn(value)
  { toast(`Status of order changed `,{
      draggable:true,
      position:toast.POSITION.TOP_RIGHT
    })
   }
  try{
   // const updateData = { status: value }
    const res =await axios.patch(`http://localhost:4000/api/v1/userorder/${id}`, {
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
      <SubTit>24_Nov_2023</SubTit>
  </Grid>
  <Grid item  lg={3} md={6} xs={12}>
     <Tit>Name</Tit>
      <SubTit>{userInfo[0].fullName}</SubTit>
  </Grid>
  <Grid item  lg={3} md={6} xs={12}>
     <Tit>Email</Tit>
      <SubTit>abc@gmail.com</SubTit>
  </Grid>
  <Grid item  lg={3} md={6} xs={12}>
     <Tit>Contact</Tit>
      <SubTit>{userInfo[0].phone}</SubTit>
  </Grid>
</Grid>
<br/>
    <hr/>
    <br/>
<Grid container spacing={2} >
<Grid item  md={6} xs={12} >
  <Container>
     <Delivery>Delivery Address</Delivery>
     <First>{userInfo[0].country}, {userInfo[0].state}, {userInfo[0].city}, </First>
     <Second><Label>Postal Code : </Label>{userInfo[0].postalcode}</Second>
     <Second><Label>Address : </Label> {userInfo[0].address}</Second>
     </Container>
  </Grid>
  <Grid item  md={6} xs={12} >
  <Container>
  <Delivery>Payment Status</Delivery>
     <First>Activo Bank</First>
     <Second><Label>No : </Label> PT508045869325148</Second>
     <Second><Label>Payment Status : </Label> <Payment>Paid</Payment></Second>
     </Container>
     
     
  </Grid>
</Grid>
<br/>
    <hr/>
    <br/>
<Grid container spacing={2} >
  
<Grid item  md={12} xs={12} >
  <Container>
  <Delivery>Order Items</Delivery>
 
 <hr/>
{bookInfo.map((item:any)=>{
  return <OrderItem item={item} key={item.bookId}/>
})}
  </Container>
</Grid>
</Grid>
  
    </Box> 
    </>
  )
}

export default OrderDetails


const btnArr=[
  {id:1, value:'processing' , text:'Processing'},
  {id:2, value:'shipped' , text:'Shipped'},
  {id:3, value:'completed' , text:'Completed'},
  {id:4, value:'cancelled' , text:'Cancelled'},
]