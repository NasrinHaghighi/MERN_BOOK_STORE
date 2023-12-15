import React,{useState, useEffect} from 'react'
import { bookType } from '../../../types/bookType'
import {Box, Title,Num , PhotoDiv,ImageDiv, Name, Category, Span, Remove, TitleBox}  from './styles'
import {Images} from '../../../helpers/Image'
import { Grid } from '@mui/material'
import UpdatePrice from './UpdatePrice/UpdatePrice'
import UpdateStock from './UpdateStock/UpdateStock'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

import { useRouter } from 'next/router'


function ProductDetailCo({productId}:any) {
  const router = useRouter()
  const [productItem, setProductItem] =useState<any>([])

  useEffect(()=>{
    axios
    .get(`https://mern-book-store-api.vercel.app/api/v1/books/${productId}`)
    .then(response =>setProductItem(response.data.book));
   },[productId])
  //console.log(productItem)
/****Logic to remove a book */
  const removeProduct = async (id:number)=>{
    { toast(`Product removed `,{
      draggable:true,
      position:toast.POSITION.TOP_RIGHT
    })
   }
   try{
    const res =await axios.delete(`https://mern-book-store-api.vercel.app/api/v1/books/${id}`)
    router.push('/dashboard/products');
  
 }
 catch(error:any){
  console.error('Error deleting product:', error.response);
 }
  }
    //console.log(product.book)
  return (
    <Box>
      <br/>
 <TitleBox> <Title>Product No :  <Num>#{productItem?._id}</Num></Title> <Remove onClick={()=>removeProduct(productItem?._id)}>Remove Product</Remove></TitleBox>
 <hr/>
<br/>
<Grid container spacing={2}>

  <Grid item lg={4} md={4} sm={12} sx={{margin:'auto'}}>
<PhotoDiv bg={productItem.imageUrl}>
   
</PhotoDiv>
  </Grid>

  <Grid item lg={8} md={8}  sm={12} sx={{margin:'auto'}}>
<ImageDiv>
    <Name>{productItem.name}</Name>
    <hr/>

    <Category>Category : <Span>{productItem.category}</Span></Category>
    <Category>Publisher :<Span>{productItem.publisher}</Span></Category>
    <Category>Author :<Span>{productItem.author}</Span></Category>
    <Category>Rate :<Span>{productItem.rating
}</Span></Category>
</ImageDiv>
<br/>
  </Grid>
  <hr/>
<br/>
 
</Grid>
<hr/>
<br/>
<Grid container spacing={2}>


<Grid item lg={6} md={6}  sm={12}>

<UpdatePrice 
  discont={productItem.discont} 
  price={productItem.price} 
  id={productItem._id} />
   
  </Grid>
  <Grid item lg={6} md={6}  sm={12} >
 
  <UpdateStock stock={productItem.stock} id={productItem._id} />
  
  </Grid>
</Grid> 
    </Box>
  )
}

export default ProductDetailCo