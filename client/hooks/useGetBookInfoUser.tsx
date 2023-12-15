import React, {useState, useEffect} from 'react'
import axios from 'axios';

function useGetBookInfoUser({ userOrders }: any) {
  const [bookInfo, setBookInfo] = useState([] as any);

  useEffect(() => {
    const fetchBookDetails = async () => {
      const orders = userOrders || [];
      const bookDetails = await Promise.all(
        orders?.map(async (item: any) => {
          try {
            const response = await axios.get(`https://mern-book-store-api.vercel.app/api/v1/books/${item.productId}`);
            return { bookInfo: response.data, quantity: item.quantity };
          } catch (error) {
            console.error(`Error fetching book details for product ID ${item.productId}:`, error);
            return { bookInfo: null, quantity: item.quantity };
          }
        })
      );

      // Fix type error by setting bookInfo to an empty array instead of null
      setBookInfo(bookDetails);
    };


      fetchBookDetails();
   
  }, [userOrders]);


  return (
      bookInfo
  )
}

export default useGetBookInfoUser