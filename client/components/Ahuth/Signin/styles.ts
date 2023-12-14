import styled from "styled-components";
import Link from 'next/link';
import { Formik, Field, Form } from 'formik';



export const Box=styled.div`
width:360px ;
height:auto;
padding:30px 0;
margin: 100px auto;
text-align:center ;
border-radius:20px ;
box-shadow:${props=>props.theme.grayBG} ;
box-shadow:${props=>props.theme.alertBoxshdow} ;
background-color: #cfd8dc ;
`
export const FormF=styled(Form)`
display:flex ;
flex-direction:column;
padding:50px ;
@media (max-width: 700px) {
     padding: 20px;
     margin: 0 10px;
     
  }

`
export const FieldF=styled(Field)`
height: 50px;
border-radius: 10px;
border-color:transparent;
margin-bottom: 10px;
`
export const Label=styled.div`

`
export const Title=styled.div`
font-size: 28px;
font-weight: 600;
margin-bottom: 10px;
`
export const Already=styled.div`

`
export const LinkS=styled(Link)`
color: ${props=>props.theme.orange};
margin-left: 10px;
&:hover{
    color: ${props=>props.theme.orange};  
}
cursor:pointer;
`
export const Button=styled.button`
background-color: ${props=>props.theme.orange};
border: none;
height: 50px;
border-radius: 10px;
margin: 30px 0;
`
export const Message=styled.div`

font-weight: 600;
color: ${props=>props.theme.red};
margin: 5px 0;
`
