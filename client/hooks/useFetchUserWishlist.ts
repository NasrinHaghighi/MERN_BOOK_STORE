

import React , {useState, useEffect}from 'react'
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { bookType } from '../types/bookType';


interface wishlistProps{
    productId:number, _id:number
}


function useFetchUserWishlist() {
   //const [wishlist, setWishlist]=useState<wishlistProps[]>([])
    const [ loading,setLoading]=useState(false)
   const [wishlistbook,setWishListBook]=useState<bookType[]>([])
   //let Bookswish:bookType[]=[]
    const user=useAppSelector(((state: { user: any; })=> state.user))
    const userId=user.userId

    const fetchuserwishlist=async()=>{
        //setLoading(true)
        try{
            const res=await axios.get(`http://localhost:4000/api/v1/wishlist/${userId}`)
            const wishlistbooks=res.data.wishlist.map(async(item:wishlistProps)=>{
        try{
          const bookRes = await axios.get(`http://localhost:4000/api/v1/books/${item.productId}`);
         return bookRes.data.book
         }catch{}

            })
            const books = await Promise.all(wishlistbooks);
            setWishListBook(books.filter((book) => book !== null) as bookType[]);
            setLoading(false);
            }catch{}

              }

       useEffect(() => {
        if (userId) {
            fetchuserwishlist();
          }
      }, [userId])


  return  {loading, wishlistbook}
  
}

export default useFetchUserWishlist