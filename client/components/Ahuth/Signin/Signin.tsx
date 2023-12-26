import React,{useState,useEffect} from 'react'
import {Box, FormF, Label,Title,Already,LinkS, Message, FieldF ,Button,Logo} from './styles'
import { Images } from "../../../helpers/Image";
import axios from "axios";
import { Formik } from 'formik';
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import Link from "next/link";
import * as Yup from 'yup';
import logo from '../../../public/images/logo.jpg'
import { userLogin } from '../../../features/userSlice';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





interface Values{
  email:string, 
  password:string
}

const SignupSchema = Yup.object().shape({
   password: Yup.string()
  .required('Password is invalid'),
  email: Yup.string().required('Email is invalid'),
});



function Signin() {


  const dispatch=useAppDispatch()
  const router = useRouter()
 const userbookList =useAppSelector((state)=>state.books.books)
 //console.log(userbookList)
  const handleSignin= async (values:Values)=>{

  try{
    let res = await axios.post("http://localhost:4000/api/v1/auth/login", values)
    console.log('Response from server:', res);
 const signinUser=res.data.user.name
  const token=res.data.token
  const userRole=res.data.user.role
 const userId=res.data.user.userId

//console.log(token)



 
  dispatch(userLogin({signinUser, userRole, userId, token}))

  if(token){
    toast('Login Succed',{
      draggable:true,
      position:toast.POSITION.TOP_RIGHT
    })
    setTimeout(() => {
      router.push('/books')
    }, 5000);
    
  }
 }
 catch(error){
   if(error){
    toast('please provide correct info',{
      draggable:true,
      position:toast.POSITION.TOP_RIGHT
    })
   }
 }

}

  return (
    <>
   <ToastContainer draggable={false} autoClose={5000} /> 
    <Box>
   <Label>
   <Logo>
      <Link href='/'>
     <Images src={logo} width={150} height={80}   alt="book"/>  </Link>
     </Logo>
     <Title>Login </Title>
    
     <Already>Do not have acount?<LinkS href={'/register'}>Register</LinkS> </Already>
     </Label>
     <Formik
      initialValues={{
        email: '',
        password:'',
       
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) =>handleSignin(values)}
    >
        {({ errors, touched }) => (
      <FormF>
       <FieldF
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          />
             {errors.email && touched.email ? (
             <Message>{errors.email}</Message>
           ) : null}
        <FieldF id="password" name="password" placeholder="Password" type='text' />
        {errors.password && touched.password ? (
             <Message>{errors.password}</Message>
           ) : null}
        <Button type="submit">Login</Button>
      </FormF>
       )}
    </Formik>
    </Box> 
  
    </>
  )
}

export default Signin


{/* <Form >
<TextField required variant="outlined" label="Email" name='email' sx={{ mb: 3}} onChange={(e)=>handelData(e)}/>
<TextField required variant="outlined" label="Password" name='password' sx={{ mb:7}} onChange={(e)=>handelData(e)}/>
<Button  onClick={handleSignin}   variant="contained" sx={{width:200, height:50 ,color:'#000', backgroundColor:orange[500], margin:'auto' ,
'&:hover': {
backgroundColor: orange[400],
},

}} >Signin</Button>
</Form> */}