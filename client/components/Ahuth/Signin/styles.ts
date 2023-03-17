import styled from "styled-components";

export const Box=styled.div`
width:45% ;
padding:30px 0 ;
text-align:center ;
border-radius:8px ;
box-shadow:${props=>props.theme.grayBG} ;
box-shadow:${props=>props.theme.alertBoxshdow} ;
`
export const Form=styled.form`
display:flex ;
flex-direction:column;
padding:50px ;


`