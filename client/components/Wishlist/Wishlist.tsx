import React from 'react'
import {Container, Titles, Title, InnerContiner} from './styles'
import useFetchUserWishlist from '../../hooks/useFetchUserWishlist'
import WishlistItem from './WishlistItem/WishlistItem'
import AddCardAlert from '../Books/Alerts/AddCardAlert'


function Wishlist() {
const {loading,wishlistbook} =useFetchUserWishlist()


if(loading){
  return <p>loading</p>
}
  return (
    <>
    <Container>
    <AddCardAlert/>
        <Title>Wishlist</Title>
    <InnerContiner>
          <Titles>
      <span>Image</span> 
       <span>Product Name</span> 
       
        <span>Price</span>
        <span></span>
        <span></span>
      
      </Titles>
      <hr/>
       {wishlistbook.map((item ,index)=>{
        return <WishlistItem item={item} key={item._id} index={index}/>
       })}
      </InnerContiner>
    </Container>
    </>
  )
}

export default Wishlist