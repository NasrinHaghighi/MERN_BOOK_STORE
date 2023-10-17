import React from 'react'
import { bookType } from '../../../types/bookType'
import {Box, Title,Num , PhotoDiv,ImageDiv, Name, Category, Span}  from './styles'
import {Images} from '../../../helpers/Image'
import { Grid } from '@mui/material'
import UpdatePrice from './UpdatePrice/UpdatePrice'
import UpdateStock from './UpdateStock/UpdateStock'


interface Product{
    product:bookType,

}

function ProductDetailCo({product}:any) {
    console.log(product.book)
  return (
    <Box>
 <Title>Product No :  <Num>#{product.book._id}</Num></Title>
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
<Grid item lg={6} md={12}  sm={12}><UpdatePrice discont={product.book.discont} price={product.book.price}/></Grid>

<Grid item lg={6} md={12}  sm={12}><UpdateStock stock={product.book.stock}/></Grid>
</Grid>
    </Box>
  )
}

export default ProductDetailCo