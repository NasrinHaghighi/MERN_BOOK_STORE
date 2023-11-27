import React,{useState} from 'react'
import {Container, Title,  First, Label, DivDelivery, WrapperDelivery, Icon, Text} from '../Address/styles'
import { TbTruckDelivery } from "react-icons/tb";
import { BsMailbox2 } from "react-icons/bs";
import { useAppDispatch ,useAppSelector} from '../../../redux/hooks'



function ShippingMethod({handelInputs, userInfo}:any) {
  const userAddress = useAppSelector((state: any) => state.userAddress.address);
  const [method, setMethod]=useState({shipMethod:userAddress.shipMethod || ''})
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
      <h5>Delivery method </h5>  
      <p> Choose your preferred shipping method for your order</p> 
      <hr/>
    </Title>
<form>
<WrapperDelivery>
  <DivDelivery>
  <Icon><BsMailbox2 /></Icon>
   
<Label>
     
        <input
          type="radio"
          name="shipMethod"
          value='normal'
          checked={method.shipMethod == 'normal'}
          onChange={checkboxhandeler}
          style={{ marginRight: '10px' }}
        />
          Normal delivery
         </Label>
         <Text>Arrives in 5-7 business days</Text>
         </DivDelivery>






         <DivDelivery>
          <Icon><TbTruckDelivery /></Icon>
        
         <Label>
      
        <input
          type="radio"
          name="shipMethod"
          value='fast'
          checked={method.shipMethod == 'fast'}
          onChange={checkboxhandeler}
          style={{ marginRight: '10px' }}
        />
          Fast delivery
         </Label>
         
         <Text>Arrives in 2-3 business days</Text>
         </DivDelivery>
</WrapperDelivery>
</form>
    </Container>
  )
}

export default ShippingMethod