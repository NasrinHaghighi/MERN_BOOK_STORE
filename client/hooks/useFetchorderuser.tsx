import React,{useState, useEffect} from 'react'
import axios from 'axios';



function useFetchorderuser(booksWithQuantity: any[]) {
//console.log(booksWithQuantity)
  const [orderedBooksInfo, setOrderedBooksInfo] = useState<any[]>([]);

  const fetchUserOrderedBooks = async () => {
    try {
      const bookInfoPromises = booksWithQuantity.map(async (item: any) => {
        const response = await axios.get(`https://mern-book-store-api.vercel.app/api/v1/books/${item.book}`);
        return response.data;
      });

      const booksInfo = await Promise.all(bookInfoPromises);
      setOrderedBooksInfo(booksInfo);
    } catch (err) {
      // Handle errors here
    }
  };

  useEffect(() => {
    if (booksWithQuantity?.length > 0) {
      fetchUserOrderedBooks();
    }
  }, [booksWithQuantity]);

  return { orderedBooksInfo };
}


  export default useFetchorderuser;