import React,{useState} from 'react'
import {Box } from '../Signin/styles'
import {Form} from './styles'
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { TextField,Button  } from '@mui/material';
function Signup() {
  const [registerUser, setRegisterUser]= useState({
    name:'',
    email:'',
    password:''
  })
  const handelData=(e:any)=>{
    const { name, value } = e.target;
    setRegisterUser({
    ...registerUser, 
    [name]: value,
   })
  }
  
  const handleRegister= async ()=>{

   try{
    let res = await axios.post("http://localhost:4000/api/v1/auth/register", registerUser)
     console.log(res)
 }
 catch(error){
   return null //that's what you did in your code.
 }

   
  }
  return (
    <Box>
    <Typography mt={2} variant="h5">Please register if you dont have account ?</Typography>
    <Form>
    <TextField  variant="outlined" label="Name" name='name' sx={{ mb: 3}} onChange={(e)=>handelData(e)}/>
     <TextField  variant="outlined" label="Email" name='email' sx={{ mb: 3}} onChange={(e)=>handelData(e)}/>
     <TextField variant="outlined" name='password' label="Password" sx={{ mb:7}} onChange={(e)=>handelData(e)}/>
     <Button  onClick={handleRegister}  variant="contained" sx={{width:200, height:50 ,color:'#000', backgroundColor:'green'}}>Signup</Button>
    </Form>
     </Box>
  )
}

export default Signup