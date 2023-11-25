import React from 'react'
import TextField from '@mui/material/TextField';
import {Wrapper} from './styles'
import {TextFieldS} from '../styles'


function IsPresentContentCo({checkboxhandeler, adress}:any) {
  return (
    <Wrapper>
      <TextFieldS
    id="outlined-multiline-static"
    label="Sender name"
    name="sender"
  
   
    value={adress.sender}
    onChange={checkboxhandeler}
    inputProps={{
      style: {
        height: "50px",
        width:'530px',
        backgroundColor:'#f5f5f5'
      },
    }}
  />
  <br/>
     <TextFieldS
    id="outlined-multiline-static"
    label="Sender message"
 
    rows={4}
    name="senderMessage"
    value={adress.senderMessage}
    onChange={checkboxhandeler}
    inputProps={{
      style: {
        height: "150px",
        width:'530px',
        backgroundColor:'#f5f5f5'
      },
    }}
  />
    </Wrapper>
  )
}

export default IsPresentContentCo