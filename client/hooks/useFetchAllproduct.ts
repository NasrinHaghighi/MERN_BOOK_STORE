import React,{useState, useEffect} from 'react'
import axios from 'axios';

function useFetchAllProduct() {

    const [allProduct, setAllProduct] = useState([]);

    const fetchAllProduct = async () => {
      
        try {
          const response = await axios.get(`https://mern-book-store-api.vercel.app/api/v1/books`)
          setAllProduct(response.data.books)
        } catch (err) {
          //setError(err);
        } finally {
         
        }
      };
    
      useEffect(() => {
        fetchAllProduct();
      }, []);
  return   { allProduct, fetchAllProduct }
   
  
}

export default useFetchAllProduct