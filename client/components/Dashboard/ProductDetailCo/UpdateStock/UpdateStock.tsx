import React ,{useState}from 'react'
import {Box,Title , Main, Input} from './styles'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Grid } from '@mui/material';
import axios from 'axios';



function UpdateStock({stock, id}:any, ) {
    
    const[ checked, setChecked ]=useState(stock)

   //console.log(checked)
   /******************change check box handeler */
    const handleCheckboxChange = async(lable: string, id:number) => {
        console.log(id)
        setChecked(lable)
        { toast(`Stock status of product changed `,{
         draggable:true,
         position:toast.POSITION.TOP_RIGHT
       })
      }
      try{

        const res =await axios.patch(`http://localhost:4000/api/v1/books/${id}`, {
          stock: lable 
          },
        {
          headers: {
            "Content-Type": "application/json"
          }}
        )
        console.log(res) 
      
     }
     catch(error){
      if(error){
       toast('This email is aleady exists',{
         draggable:true,
         position:toast.POSITION.TOP_RIGHT
       })
      }
     }
       };
  return (
    <Box>
    <ToastContainer draggable={false} autoClose={3000}/> 
  
    <Title>Stock status:</Title>
    <br/>
    <Main>
            {arr.map((item, index) =>{
                console.log(item.label)
                return  (
                    <div key={index} style={{marginBottom:15}}> 
                        <label htmlFor={`myCheckbox-${index}`} style={{marginRight:10}}>{item.label}</label>
                        <Input
              type="radio"
              id={`myCheckbox-${index}`}
              checked={item.label ===  checked}
             onChange={() => handleCheckboxChange(item.label, id)}
             style={{ borderColor: 'red', background: 'red' }}
            />
                   </div>
                )
              
            })}
   
        </Main>
  </Box>
  )
}

export default UpdateStock


const arr =[
    {id:1 , label:'In Stock', },
    {id:2 , label:'Out of Stock', },
  
]