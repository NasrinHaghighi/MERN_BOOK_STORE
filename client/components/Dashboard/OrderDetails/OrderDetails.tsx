import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';

import {Title, Box,Num,  Tit, SubTit, Container, First, Second, Button, Status, Delivery, Payment, Label, Titles} from './styles'
import { BsBorder } from 'react-icons/bs';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import OrderItem from './OrderItem';





function OrderDetails({orderId}:any) {

  const [orderItem, setOrderItem] =useState<any>([])
 //console.log(orderId)

 useEffect(()=>{
  axios
  .get(`https://mern-book-store-api.vercel.app/api/v1/userorder/${orderId}`)
  .then(response =>setOrderItem(response.data.order));
 },[orderId])
console.log(orderItem)
const {userInfo, status, userId, _id,booksWithQuantity} =orderItem

/*STUPID way to get DATA*/
//console.log(userInfo) 
//console.log(userInfo[0]?.fullName)
/*status of order*/
const [activeBtn, setActiveBtn] =useState<undefined | string>( )
useEffect(() => {
  if (status) {
    setActiveBtn(status);
  }
}, [status]);
 //console.log(activeBtn)
 const updateOrder = async(id:number, value:string)=>{
  setActiveBtn(value)
  { toast(`Status of order changed `,{
      draggable:true,
      position:toast.POSITION.TOP_RIGHT
    })
   }
  try{
   // const updateData = { status: value }
    const res =await axios.patch(`https://mern-book-store-api.vercel.app/api/v1/userorder/${id}`, {
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
/*status of order*/ 


/*fetch item that user orderd*/
  return (
   <>
    <Box>
        <ToastContainer draggable={false} autoClose={3000}/> 
        <br/>
    <Title>Order No :  <Num>#{_id}</Num></Title>
   
    <hr/>
    <br/>
    <Status>Status:  </Status>

    <Grid container spacing={2}>
      {btnArr.map((item)=>{
          return   <Grid item lg={3} md={3} xs={6}>  
           <Button
           onClick={()=>updateOrder(_id, item.value)} 
           className={`${item.value} ${activeBtn === item.value ? 'active' : ''}`}
         
           >
            {item.text}
            
            </Button>  </Grid>
      })}
    
    </Grid>
    <br/>
    <hr/>
    <br/>
    <Grid container spacing={2}>
  <Grid item  lg={3} md={3} xs={6}>
     <Tit>Order Created at</Tit>
      <SubTit>24_Nov_2023</SubTit>
  </Grid>
  <Grid item  lg={3} md={3} xs={6}>
     <Tit>Name</Tit>
       <SubTit>{userInfo?.fullName}</SubTit>  
  </Grid>
  <Grid item  lg={3} md={3} xs={6}>
     <Tit>Email</Tit>
      <SubTit>abc@gmail.com</SubTit>
  </Grid>
  <Grid item  lg={3} md={3} xs={6}>
     <Tit>Contact</Tit>
         <SubTit>{userInfo?.phone}</SubTit>  
  </Grid>
</Grid>
<br/>
    <hr/>
    <br/>
<Grid container spacing={2} >
<Grid item  md={6} xs={12} >
    <Container>
     <Delivery>Delivery Address</Delivery>
     <First>{userInfo?.country}, {userInfo?.state}, {userInfo?.city}, </First>
     <Second><Label>Postal Code : </Label>{userInfo?.postalcode}</Second>
      <Second><Label>Address : </Label> {userInfo?.address}</Second>
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
 {booksWithQuantity?.map((item:any, index:number)=>{
  return <OrderItem item={item} key={index}/>
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



//   const {userOrders, fetchUserOrder } = useFetchorderuser(userId);
//   const bookInfo = useGetBookInfoUser({ userOrders });

//   useEffect(() => {
//     fetchUserOrder()
//    }, []);
 
// //console.log(bookInfo)

//  const [activeBtn, setActiveBtn] =useState<undefined | string>(order.order.status )
// useEffect(() => {
// setActiveBtn(order.order.status)
// }, [])



// const updateOrder = async(id:number, value:string)=>{
//   setActiveBtn(value)
//   { toast(`Status of order changed `,{
//       draggable:true,
//       position:toast.POSITION.TOP_RIGHT
//     })
//    }
//   try{
//    // const updateData = { status: value }
//     const res =await axios.patch(`http://localhost:4000/api/v1/userorder/${id}`, {
//        status: value 
//     },
//     {
//       headers: {
//         "Content-Type": "application/json"
//       }}
//     )
//     console.log(res) 
  
// }
// catch(error){
  
// }
// }