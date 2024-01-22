import styled from "styled-components";

export const Container=styled.div`


display: grid;
grid-template-columns:1fr 2fr 1fr 1fr 1fr ;
column-gap: 10px;
align-items: baseline;
//text-align: center;
margin-bottom: 20px;
padding: 10px;
border-radius:10px;
&.even{
    background-color:${props=>props.theme.grayBG} ; 
}
&.odd{
    background-color:${props=>props.theme.white} ; 
}
@media (max-width: 900px) {
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
text-align: center;
`
export const Conatiner2=styled.div`
 display: none;

@media (max-width: 900px) {
    display: block;
  }
`
export const Box=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width: 500px) {
    flex-direction: column;
  }
`



export const Top=styled.div`
margin-bottom: 20px;
display: grid;
grid-template-columns:1fr 3fr;
align-items: baseline;
column-gap: 10px;
@media (max-width: 500px) {
  grid-template-columns:1fr;
  text-align: center;
  }
`

export const Price2=styled.div`
margin-bottom: 15px;
font-weight: 700;
&>span{
  font-size: 18px;
  font-weight: 700;
  color: ${props=>props.theme.orange};
}
`
