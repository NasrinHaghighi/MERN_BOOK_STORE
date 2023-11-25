import React, {useState} from 'react'
import {Container, Title,  First, Label, Second, Third, Fourth, Fifth, IsPresent, Fourth2,TextFieldS} from './styles'
import { Formik } from 'formik';
import {FormF, FieldF, Message,}  from '../../Ahuth/Signin/styles'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CountryCo from './Country/Country';
import IsPresentContentCo from './IsPresentContentCo/IsPresentContentCo';
import InputLabel from '@mui/material/InputLabel';


function Adress({handelInputs, userInfo}:any) {

 
 const [adress, setAdress]=useState({gender:'', fullName:'', country:'',state:'', city:'', postalcode:'',phone:'',address:'',isPresent:false , sender:'' , senderMessage:''})


 const checkboxhandeler=(e:any)=>{
  const value=e.target.value
  if( e.target.type === "radio"){
   
   // console.log(value)
  
   setAdress((prevAdress) => {
     const updatedAdress = { ...prevAdress, [e.target.name]: value };
     handelInputs(updatedAdress);
     return updatedAdress; 
   });
  }
  else{
    setAdress((prevAdress) => {
      const updatedAdress = { ...prevAdress, [e.target.name]: value };
      handelInputs(updatedAdress); 
      return updatedAdress; 
    });
   
  }
 }
 const handelContry=(value:any)=>{
  setAdress((prevAdress)=>{
    const updatedAdress = { ...prevAdress, country: value };
    handelInputs(updatedAdress);
    return updatedAdress; 
  })
    
  }
 const handelState=(value:any)=>{
  setAdress((prevAdress)=>{
    const updatedAdress = { ...prevAdress, state: value };
    handelInputs(updatedAdress);
    return updatedAdress; 
  })
   }
   const handelCity=(value:any)=>{
    setAdress((prevAdress)=>{
      const updatedAdress = { ...prevAdress, city: value };
      handelInputs(updatedAdress);
      return updatedAdress; 
    })
     }
     const handlePresentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      //setPresent(e.target.checked);
      setAdress((prevAdress)=>{
        const updatedAdress = { ...prevAdress, isPresent: e.target.checked };
        handelInputs(updatedAdress);
        return updatedAdress; 
      })
    };

  return (
    <Container>
      <Title>
      <h5>Delivery address </h5>  
      <p> Please provide a delivery address</p> 
      <hr/>
    </Title>
<form>




 <First>
<Label >
<input
            type="radio"
            name="gender"
            value='male'
            checked={adress.gender == 'male'}
            onChange={checkboxhandeler}
            style={{ marginRight: '10px' }}
          />
          Male
        </Label>
        <Label>
          <input
            type="radio"
            name="gender"
            value='female'
            checked={adress.gender  == 'female'}
            onChange={checkboxhandeler}
            style={{ marginRight: '10px' }}
          />
          Female
        </Label>
       
</First> 
<Second>
<TextField
    id="outlined-multiline-static"
    label="Full name"
    name='fullName'
    value={adress.fullName}
    onChange={checkboxhandeler}
    inputProps={{
      style: {
        height: "50px",
        width:'250px',
        backgroundColor:'#f5f5f5'
      },
    }}
  />
</Second>
    
          

 <Third>
<CountryCo handelContry={handelContry} handelState={handelState} handelCity={handelCity}/>

</Third>
<Fourth>
  <div>
<TextField
    id="outlined-multiline-static"
    label="Postal code"
    name='postalcode'
    value={adress.postalcode}
    onChange={checkboxhandeler}
    inputProps={{
      style: {
        height: "50px",
        width:'250px',
        backgroundColor:'#f5f5f5'
      },
    }}
  />
  </div>
  <Fourth2>
<TextField
    id="outlined-multiline-static"
    label="Phone"
    name='phone'
    value={adress.phone}
    onChange={checkboxhandeler}
    inputProps={{
      style: {
        height: "50px",
        width:'250px',
        backgroundColor:'#f5f5f5'
      },
    }}
  />
  </Fourth2>
</Fourth>
<Fifth>

<TextFieldS
    id="outlined-multiline-static"
    label="Address"
 
    rows={4}
    name="address"
    value={adress.address}
    onChange={checkboxhandeler}
    inputProps={{
      style: {
        height: "150px",
       
      },
    }}
  />

      
</Fifth>
<IsPresent>
<hr/>
<label>
<input
        
            type="checkbox"
            name="isPresent"
            checked={adress.isPresent}
            onChange={handlePresentChange}
          />
         Delivery as a present
        </label>
</IsPresent>
{
  adress.isPresent&& <IsPresentContentCo checkboxhandeler={checkboxhandeler} adress={adress}/>
} 

  

</form>
    </Container>
  )
}

export default Adress



{/* <Label>
        Full name : 
        <Input
          type="text"
          name="fullName"
          value={adress.fullName}
          onChange={checkboxhandeler}
        />
      </Label> */}

      {/* <TextField id="outlined-basic" label='gg' variant="outlined" fullWidth name='fullName'  value={adress.fullName}   onChange={checkboxhandeler} /> */}