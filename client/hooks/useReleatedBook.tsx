import React ,{useState, useEffect}from 'react'
import axios from 'axios';



function useReleatedBook({bookcategory}:any) {
const [data, setData] = useState<any>([])

useEffect(() => {
  axios.get(`https://mern-book-store-api.vercel.app/api/v1/books/?category=${bookcategory}`).then((res) =>setData(res.data))
  
  .catch((err) => console.log(err))
}, [bookcategory])

  return (
    data
  )
}

export default useReleatedBook