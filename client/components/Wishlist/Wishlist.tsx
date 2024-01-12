import React from 'react'
import {Container, Titles, Title, InnerContiner} from './styles'
import useFetchUserWishlist from '../../hooks/useFetchUserWishlist'
import WishlistItem from './WishlistItem/WishlistItem'
import AddCardAlert from '../Books/Alerts/AddCardAlert'
import { useAppSelector } from '../../redux/hooks'

import { bookType } from '../../types/bookType';

function Wishlist() {
  //const {loading,wishlistbook} =useFetchUserWishlist()


  const wishlistbook = useAppSelector((state) => state.favoriteList.favoraitelist)
  //console.log(wishlistbook)

  return (
    <>
      <Container>
        <AddCardAlert />
        <Title>Wishlist</Title>
        <InnerContiner>
          <Titles>
            <span>Image</span>
            <span>Product Name</span>

            <span>Price</span>
            <span></span>
            <span></span>

          </Titles>
          <hr />
          {wishlistbook.map((item, index) => {
            return <WishlistItem item={item} index={index}/>
          })}
        </InnerContiner>
      </Container>
    </>
  )
}


export default Wishlist