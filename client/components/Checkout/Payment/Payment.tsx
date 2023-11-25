import React from 'react'
import {Container, Title,  First, Label} from '../Address/styles'


function Payment() {
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
     finalll
      <input
        type="checkbox"
        name="hooks"
        //checked={state.hooks}
        //onChange={handleChange}
      />
       </Label>
</First>
</form>
  </Container>
  )
}

export default Payment