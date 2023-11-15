import React,{useState} from 'react'
import { Box, Already, Title, Label, LinkS, FormF, FieldF, Button, Message, } from '../Signin/styles';
import axios from 'axios';
import { useRouter } from 'next/navigation'

import { Formik } from 'formik';
import * as Yup from 'yup';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Values{
  name:string,
  email:string, 
  password:string, 
 
}

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
function Signup() {
 
  const router = useRouter()
  const handleRegister= async (values:Values)=>{
//console.log(values)
   try{
     await axios.post("http://localhost:4000/api/v1/auth/register", values)
     router.push('/login')
 }
 catch(error){
   if(error){
    toast('This email is aleady exists',{
      draggable:true,
      position:toast.POSITION.TOP_RIGHT
    })
   }
 }

   
  }



   return (
    <>
    <ToastContainer draggable={false} autoClose={5000}/> 
    <Box>
    
   <Label>
     <Title>Register </Title>
     <Already>Aleady have account?<LinkS href={'/login'}>SignIn</LinkS> </Already>
     </Label>
     <Formik
      initialValues={{
        name: '',
        email: '',
        password:'', 
      
      
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
   
        await new Promise((r) => setTimeout(r, 500));
      
        handleRegister(values)
       
      }}
    >
        {({ errors, touched }) => (
      <FormF>
      
        <FieldF id="name" name="name" placeholder="Name" />
        {errors.name && touched.name ? (
             <Message>{errors.name}</Message>
           ) : null}
       <FieldF
          id="email"
          name="email"
          placeholder="Email"
          type="email"
         
          />
           {errors.email && touched.email ? (
             <Message>{errors.email}</Message>
           ) : null}

<FieldF id="password" name="password" placeholder="Password" type='password' />
{errors.password && touched.password ? (
             <Message>{errors.password}</Message>
           ) : null}
        <Button type="submit">Register</Button>
      </FormF>
       )}
    </Formik>
     </Box>
     </>
  )
}

export default Signup



   {/* <Form>
    <TextField required variant="outlined" label="Name" name='name' sx={{ mb: 3}} onChange={(e)=>handelData(e)}/>
     <TextField required variant="outlined" label="Email" name='email' sx={{ mb: 3}} onChange={(e)=>handelData(e)}/>
     <TextField required variant="outlined" name='password' label="Password" sx={{ mb:7}} onChange={(e)=>handelData(e)}/>
     <Button  onClick={handleRegister}  variant="contained" sx={{width:200, height:50 ,color:'#000', backgroundColor:orange[500],
      margin:'auto',
        '&:hover': {
          backgroundColor: orange[400],
         },
         }}>Register</Button>
    </Form> */}