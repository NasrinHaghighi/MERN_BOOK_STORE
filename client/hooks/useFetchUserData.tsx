import React ,{useState, useEffect}from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import axios from 'axios';



function useFetchUserData() {
    const [booksWithQuantity, setBooksWithQuantity] = useState<any[]>([]);

    //const dispatch=useAppDispatch()
    const user=useAppSelector(((state: { user: any; })=> state.user))
    const userId=user.userId

    const fetchUserdata=async()=>{
        try{
       const res=await axios.get(`http://localhost:4000/api/v1/cart/${userId}`)
       const productsWithQuantity = res.data.cart.products;
       const bookDetailsPromises = productsWithQuantity.map(async (product: any) => {
         try {
           const bookRes = await axios.get(`http://localhost:4000/api/v1/books/${product.productId}`);
           const bookDetailsWithQuantity = {
             ...bookRes.data, // Book details
             amount: product.quantity, // Add quantity to book details
           };
           return bookDetailsWithQuantity;
         } catch (error) {
           console.log(`Error fetching book details for ID: ${product.productId}`, error);
           return null;
         }
       });
       
       const booksWithQuantity = await Promise.all(bookDetailsPromises);
       setBooksWithQuantity(booksWithQuantity);
        }catch(err){
         console.log(err)
        }
       }
       
       useEffect(() => {
         fetchUserdata()
       }, [userId])




       return {
        booksWithQuantity,
        fetchUserdata,
      };



 
}

export default useFetchUserData