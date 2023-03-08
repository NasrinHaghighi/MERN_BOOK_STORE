import styled ,{ keyframes } from "styled-components";

export const PriceConatiner = styled.div`

background-color:#fff ;
border:1px solid ${props=>props.theme.grayBorder};
border-radius:10px ;
padding:50px 30px ;
height:600px ;

`;
export const  Top=styled.div`
display:flex ;
justify-content:flex-start ;
align-items:center ;
border-bottom:1px solid ${props=>props.theme.grayBorder} ;
margin-bottom:30px ;
`
export const  Tit=styled.h1`
color:${props=>props.theme.textStrong} ;
margin-right:20px;
`
export const  Value=styled.h1`
color:${props=>props.theme.priceColor} ;
`
export const  Middel=styled.div`
color:${props=>props.theme.textStrong} ;
border-bottom:1px solid ${props=>props.theme.grayBorder} ;
`
export const  Text=styled.div`
font-size:21px ;
font-weight:600 ;
margin-bottom:20px;
`
//////*****************BOtttom */
export const  Bottom=styled.div`
display:flex ;
flex-direction:column;
padding:30px 0 ;
font-size:18px ;
`
export const  AddFavoraite=styled.button`
width:100% ;
padding:10px 0 ;
border-radius:12px ;
margin:5px 0 ;
border:2px solid #fff ;
`
export const  AddToCard=styled.button`
width:100% ;
padding:10px 0 ;
border-radius:12px ;
margin:5px 0 ;
border:none ;
background-color:${props=>props.theme.orange} ;
`