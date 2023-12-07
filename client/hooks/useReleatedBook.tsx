import React ,{useState, useEffect}from 'react'
import axios from 'axios';



function useReleatedBook({bookcategory}:any) {
const [data, setData] = useState<any>([])

useEffect(() => {
  axios.get(`http://localhost:4000/api/v1/books?category=${bookcategory}`).then((res) =>setData(res.data))
  
  .catch((err) => console.log(err))
}, [bookcategory])

  return (
    data
  )
}

export default useReleatedBook