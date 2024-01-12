import styled from "styled-components";

export const Container=styled.div`


display: grid;
grid-template-columns:1fr 2fr 1fr 1fr 1fr ;
column-gap: 10px;
align-items: baseline;
margin-bottom: 20px;
padding: 10px;
border-radius:10px;
&.even{
    background-color:${props=>props.theme.grayBG} ; 
}
&.odd{
    background-color:${props=>props.theme.white} ; 
}
@media (max-width: 1100px) {
  display: none;
  }
`

export const Price=styled.div`
margin-right: 15px;
`
export const PriceBox=styled.div`
font-size: 18px;
font-weight: 700;
 display: flex;
justify-content: flex-start;
align-items: center; 

`
export const DiscontBag=styled.span`
background-color: ${props=>props.theme.red};
padding: 3px 5px;
border-radius: 10px;
color: ${props=>props.theme.white};
`

export const Name=styled.span`
font-weight: 700;
`

export const Btn=styled.button`
font-weight: 700;
max-width: 150px;
padding: 5px 10px;
border: none;
border-radius: 10px;
background-color: ${props=>props.theme.green};
`

export const Remove=styled.div`
font-weight: 700;
color: ${props=>props.theme.orange};
font-size: 22px;
cursor: pointer;
`