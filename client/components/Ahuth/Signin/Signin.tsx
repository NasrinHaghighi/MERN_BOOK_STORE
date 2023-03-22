import React,{useState,useEffect} from 'react'
import {Box, Form} from './styles'
import Typography from '@mui/material/Typography';
import { TextField,Button  } from '@mui/material';
import axios from "axios";

interface User{
  email:string,
  password:string
}

function Signin() {
const [user, setUser]= useState({
  email:'',
  password:''
})
const handelData=(e:any)=>{
  const { name, value } = e.target;
 setUser({
  ...user, 
  [name]: value,
 })
}

const handleSignin= async (e:any)=>{

  try{
    let res = await axios.post("http://localhost:4000/api/v1/auth/login", user)
const signinUser=res.data.user.name
const token=res.data.token
localStorage.setItem('token', token)
localStorage.setItem('name', signinUser)
 }
 catch(error){
   return null //that's what you did in your code.
 }

}

  return (
    <Box>
   <Typography mt={2} variant="h5">you have an acount? please signin :</Typography>
   <Form >
    <TextField  variant="outlined" label="Email" name='email' sx={{ mb: 3}} onChange={(e)=>handelData(e)}/>
    <TextField variant="outlined" label="Password" name='password' sx={{ mb:7}} onChange={(e)=>handelData(e)}/>
    <Button  onClick={handleSignin}   variant="contained" sx={{width:200, height:50 ,color:'#000', backgroundColor:'green'}} >Signin</Button>
   </Form>
    </Box>
  )
}

export default Signin