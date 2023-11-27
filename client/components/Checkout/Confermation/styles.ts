import styled from "styled-components";




export const SubTit=styled.div`
display: flex;
justify-content: flex-start;
align-items: baseline;
margin-bottom: 20PX;

`
export const Number=styled.span`
margin-left: 10px;
`

export const BooksContainer=styled.span`
display: grid;
grid-template-columns: repeat(3, 1fr);
column-gap: 20px;
margin-bottom: 80px;
@media (max-width: 1000px) {
    grid-template-columns: 1fr;
    row-gap: 20px;
  } 
`
/***book item..... */
export const BoxBook=styled.div`
background-color: ${props=>props.theme.mainBG};
padding: 20px;
max-width: 350px;
border-radius: 10px;
border: 1px solid ${props=>props.theme.grayBorder};
text-align: left;
display: flex;
align-items: center;
@media (max-width: 700px) {
flex-direction: column;
align-items: center;
justify-content: center;
           
  }  
`
export const ImageDiv=styled.div`
margin: 0  15px  0 0;
@media (max-width: 700px) {
margin-bottom: 10px;
           
  }  
`
export const Info=styled.div`
@media (max-width: 700px) {
text-align: center;
           
  }  
`
export const Name=styled.h6`
font-weight: 700;
`
export const Amount=styled.p`

`
export const Price=styled.p`
font-weight: 600;
font-size: 18px;
color: ${props=>props.theme.orange};
`

/*Addrees */
export const AddressBox=styled.div`
background-color: ${props=>props.theme.mainBG};

border-radius: 10px;
border: 1px solid ${props=>props.theme.grayBorder};
width: 100%;
display: grid;
grid-template-columns:  5fr 2fr 1fr;
@media (max-width: 1100px) {
    grid-template-columns: 1fr;
grid-template-rows: repeat(2, 1fr);
           
  }  

`
export const NameUser=styled.div`

`
export const Morada=styled.div`
font-weight: 600;
margin: 15px 0 5px 0;
`
export const InfoAddress=styled.div`
padding: 20px;
`

export const ShippingMethod=styled.div`
padding: 10px;
font-weight:700;
display: flex;
font-size: 14px;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid ${props=>props.theme.grayBorder};
`
export const Edit=styled.div`
padding: 20px;
font-size: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: ${props=>props.theme.orange};
border: 1px solid ${props=>props.theme.grayBorder};
`
export const ShippingMethodValue=styled.div`
color: ${props=>props.theme.orange};
margin-top: 10px;
`
