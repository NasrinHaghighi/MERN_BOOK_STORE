import styled from "styled-components";


export const CardItemContainer=styled.div`
height: 150px;
width:100% ;
color:#ffff ;
font-size:20px ;
display: grid;
grid-template-columns:0.5fr 0.5fr 2fr 1fr .75fr 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
align-items:center ;
&.even{
    background-color:${props=>props.theme.grayBG} ; 
}
@media (max-width: 1100px) {
  display: none;
  }
`
export const Trash=styled.div`
text-align:center ;
color:${props=>props.theme.orange} ;
cursor: pointer;
`

export const BookPhoto=styled.div`
`


export const Name=styled.div`
color:${props=>props.theme. graytext} ;

`
export const Price=styled.div`
color:${props=>props.theme. graytext} ;
font-weight:700 ;
`
export const Amount=styled.input`
width:100px ;
height:40px ;
border-radius:50px ;
background-color: transparent;
padding:0 10px ;
outline:none ;
border:3px solid ${props=>props.theme.grayBorder};
font-size:20px ;
font-weight:600 ;

color:${props=>props.theme.graytext} !important;
appearance: none;
    display: inline-block;
&:hover{
    color:${props=>props.theme.graytext} ;  
}

`

export const TotalPrice=styled.div`
color:${props=>props.theme. graytext} ;
font-weight:700 ;
`
/***************Res */


export const ConteinerRes=styled.div`
display: grid;
padding: 10px;
border-radius: 10px;
margin-bottom: 10px;
grid-template-columns: 1fr 3fr;

border: 2px solid ${props=>props.theme.grayBG};
&.even{
    background-color:${props=>props.theme.grayBG} ; 
}

@media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`


export const BookPhotoRes=styled.div`
display: flex;
justify-content: center;
align-self: center;
@media (max-width: 600px) {
    margin-bottom:20px;
  }
`


export const Info=styled.div`

display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 1fr);
grid-row-gap:0px !important;
@media (max-width: 600px) {
    margin-bottom:20px;
  }
`
export const NameRes=styled.span`
color:${props=>props.theme. graytext} ;
font-weight: 600;
font-size: 20px;
display: flex;
 
justify-content: space-between;


`
export const PriceRes=styled.div`
display: flex;
justify-content: space-between;
align-items: center;


`
export const PriceSapn=styled.span`
font-weight: 700;
`
export const AmountDiv=styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`
export const TotalPriceRes=styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`


