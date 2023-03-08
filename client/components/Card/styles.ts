import styled from "styled-components";

export const Container=styled.div`

box-shadow: ${props=>props.theme.alertBoxshdow};
`

export const Titles=styled.div`

height: 100px;
width:100% ;
color:#ffff ;
background-color:${props=> props.theme.bachgroundColor} ;
font-size:28px ;
display: grid;
grid-template-columns:0.5fr 0.5fr 2fr 1fr .75fr 1fr;

grid-column-gap: 0px;
grid-row-gap: 0px;
align-items:center ;
&>span{
  
}

`
export const Total=styled.div`
width:40% ;
margin:30px auto ;
text-align:center ;
padding:50px ;
background-color:#fff ;
box-shadow: ${props=>props.theme.alertBoxshdow};
`
export const  Top=styled.div`
display:flex ;
justify-content:center ;
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
export const  Bottom=styled.div`
display:flex ;
flex-direction:column;
padding:30px 0 ;
font-size:18px ;
`
export const BackToShop=styled.button`
width:100% ;
padding:10px 0 ;
border-radius:12px ;
margin:5px 0 ;
border:2px solid #fff ;

`
export const  Checkout=styled.button`
width:100% ;
padding:10px 0 ;
border-radius:12px ;
margin:5px 0 ;
border:none ;
background-color:${props=>props.theme.orange} ;`