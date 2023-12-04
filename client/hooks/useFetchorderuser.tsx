import React,{useState, useEffect} from 'react'
import axios from 'axios';



function useFetchorderuser(userId:any) {
    const [userOrders, setUserOrders] = useState([]);
   
  
    const fetchUserOrder = async () => {
      
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/cart/${userId}`);
        setUserOrders(response.data.cart.products)
    
      } catch (err) {
        //setError(err);
      } finally {
       
      }
    };
  
    useEffect(() => {
      fetchUserOrder();
    }, []);
   return { userOrders, fetchUserOrder };
  }

  export default useFetchorderuser;