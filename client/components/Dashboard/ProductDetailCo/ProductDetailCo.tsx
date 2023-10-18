import React from 'react'
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


function ProductDetailCo({product}:any) {
  const router = useRouter()

/****Logic to remove a book */
  const removeProduct = async (id:number)=>{
    { toast(`Product removed `,{
      draggable:true,
      position:toast.POSITION.TOP_RIGHT
    })
   }
   try{
    const res =await axios.delete(`http://localhost:4000/api/v1/books/${id}`
    )
    router.push('/dashboard/products');
  
 }
 catch(error){
  console.log(error)
 }
  }
    //console.log(product.book)
  return (
    <Box>
      <br/>
<TitleBox> <Title>Product No :  <Num>#{product.book._id.substring(0,5)}</Num></Title> <Remove onClick={()=>removeProduct(product.book._id)}>Remove Product</Remove></TitleBox>
 <hr/>
<br/>
<Grid container spacing={2}>

  <Grid item lg={6} md={12} sm={12}>
<PhotoDiv bg={product.book.imageUrl}>
   
</PhotoDiv>
  </Grid>

  <Grid item lg={6} md={12}  sm={12}>
<ImageDiv>
    <Name>{product.book.name}</Name>
    <hr/>

    <Category>Category : <Span>{product.book.category}</Span></Category>
    <Category>Publisher :<Span>{product.book.publisher}</Span></Category>
    <Category>Author :<Span>{product.book.author}</Span></Category>
    <Category>Rate :<Span>{product.book.rating
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
<Grid item lg={6} md={12}  sm={12}>
  <UpdatePrice 
  discont={product.book.discont} 
  price={product.book.price} 
  id={product.book._id}/>
  </Grid>

<Grid item lg={6} md={12}  sm={12}><UpdateStock stock={product.book.stock} id={product.book._id}/></Grid>
</Grid>
    </Box>
  )
}

export default ProductDetailCo