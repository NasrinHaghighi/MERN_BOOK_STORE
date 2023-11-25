import React,{useState} from 'react'
import {Container, Title,  First, Label} from '../Address/styles'

function ShippingMethod({handelInputs, userInfo}:any) {

  const [method, setMethod]=useState({shipMethod:''})
  const checkboxhandeler=(e:any)=>{
    if( e.target.type === "radio"){
      const value=e.target.value
     // console.log(value)
    
     setMethod((prevMethod) => {
       const updatedMethod = { ...prevMethod, [e.target.name]: value };
       handelInputs(updatedMethod); 
       return updatedMethod; 
     });
    }
   }
  return (
    <Container>
      <Title>
      <h5>Delivery address </h5>  
      <p> Please provide a delivery address</p> 
      <hr/>
    </Title>
<form>
<First>
<Label>
       normal
        <input
          type="radio"
          name="shipMethod"
          value='normal'
          checked={method.shipMethod == 'normal'}
          onChange={checkboxhandeler}
        />
         </Label>
         <Label>
       fast
        <input
          type="radio"
          name="shipMethod"
          value='fast'
          checked={method.shipMethod == 'fast'}
          onChange={checkboxhandeler}
        />
         </Label>
</First>
</form>
    </Container>
  )
}

export default ShippingMethod