import React,{useState, useEffect} from 'react'
import axios from 'axios';

function useFetchAllProduct() {

    const [allProduct, setAllProduct] = useState([]);

    const fetchAllProduct = async () => {
      
        try {
          const response = await axios.get(`http://localhost:4000/api/v1/books`)
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