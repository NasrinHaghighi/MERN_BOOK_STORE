import React,{useState, useEffect} from 'react'
import axios from 'axios';

function useFetchOrder() {

    const [allOrders, setAllOrders] = useState([]);

    const fetchAllOrder = async () => {
      
        try {
          const response = await axios.get(`https://mern-book-store-api.vercel.app/api/v1/userOrder`)
        setAllOrders(response.data.order)
        } catch (err) {
          //setError(err);
        } finally {
         
        }
      };
    
      useEffect(() => {
        fetchAllOrder();
      }, []);
  return   { allOrders, fetchAllOrder }
   
  
}

export default useFetchOrder