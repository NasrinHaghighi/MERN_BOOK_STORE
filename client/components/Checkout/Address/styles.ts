import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Select from "react-select";



export const Container=styled.div`
margin:100px 0;
padding: 30px;
background-color: ${props=>props.theme.white};
border-radius: 10px;
`

export const Title=styled.div`


`
export const First=styled.div`
margin-bottom:40px;
`
export const Label=styled.label`
margin-right: 30px;

`
export const Second=styled.label`
width:100%;
margin-bottom: 20px;
`
export const Third =styled.div`
display: flex;

`



export const Fourth =styled.div`
display: flex;
margin-bottom: 20px;
@media (max-width: 1200px) {
    flex-direction: column;
  }
`
export const Fourth2 =styled.div`
margin-left: 20px;

@media (max-width: 1200px) {
    margin-left: 0px;
    margin-top: 30px;
  }
`

export const Fifth =styled.div`
margin-bottom: 20px;

`
export const IsPresent =styled.div``

export const Input=styled.input`
height: 1.4375em;
margin-left: 20px;
padding: 16.5px 14px;
border-radius: 5px;

`

export const ContryCoBox=styled.div`
display: flex;
justify-content: space-between;
& > :nth-child(2) {
    margin:0 10px 0 10px;}
@media (max-width: 1200px) {
   flex-direction: column;
    margin: 0 auto;
    & > :nth-child(2) {
    margin:0 ;}
  }
`
export const TextFieldS=styled(TextField)`
 width:530px;
        background-color:#f5f5f5;
        @media (max-width: 1200px) {
            width:250px;
           
  }    
`
/*select s*/
export const SelectS=styled(Select)`
margin-right: 20px;
@media (max-width: 1200px) {
    margin-right: 0px;
           
  }  
`

