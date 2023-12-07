import styled from "styled-components";




export const Box =styled.section`
background-color: ${props=>props.theme.white};
width: 80%;
padding:10px 30px  ;
border-radius: 10px;
display: flex;
flex-direction: column;
@media (max-width:1400px) {
    width:80%;
margin: 0 auto;
  }
  @media (max-width:700px) {
padding: 0;
width: 100%;
  }
`
export const Title =styled.span`
font-size: 24px;
margin-bottom: 20px;
`
export const Num =styled.span`
color: ${props=>props.theme.orange};
@media (max-width:600px) {
font-size: 14px;
  }
`

/************ */

export const UserInfo=styled.div`
display: flex;
`
export const Column=styled.div`

`
export const Tit=styled.div`
font-weight:700;
`
export const SubTit=styled.div`

`
export const Container=styled.div`
border: 1px solid ${props=>props.theme.grayBorder};
padding: 10px 15px;
border-radius: 10px;
background-color: ${props=>props.theme.mainBG};

`
export const First=styled.div`
font-size: 18px;
margin: 15px 0;
`
export const Second=styled.div`
font-size: 18px;
margin: 15px 0;
@media (max-width:600px) {
font-size: 14px;
  }
`

/***********Button */
export const Button =styled.button`
padding: 8px 15px;
border-radius: 8px;
border: none;
font-weight: 600;
opacity:0.4;
color: #fff;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
&.active{
    opacity:1;
    color: #000;
}
&.processing{
    background-color:${props=>props.theme.orange} ;

}
&.shipped{
    background-color:${props=>props.theme.blue2} ;

}
&.completed{
    background-color:${props=>props.theme.green} ;

}
&.cancelled{
    background-color:${props=>props.theme.red} ;

}
`
export const Status =styled.span`
font-size: 24px;
font-weight: 600;
margin-bottom: 15px;
`

export const Delivery=styled.div`
font-size: 20px;
font-weight: 700;
`

export const Payment=styled.span`
color: ${props=>props.theme.green};
font-weight: 700;
`
export const Label=styled.span`
color: ${props=>props.theme.orange};
font-weight: 700;
`
/*orderItem style*/
export const Titles = styled.div`
display: grid;
grid-template-columns: 1fr 3fr repeat(3, 1fr);
font-weight: 500;
margin-top: 25px;


`

export const OrderItemBox = styled.div`
 display: grid;
 grid-template-columns: 1fr 4fr;
margin-bottom: 20px;
align-items: center;
@media (max-width: 1000px) {
  grid-template-columns: 1fr;
grid-template-rows: repeat(2, 1fr);
  }
`
export const BookPhoto = styled.div`
@media (max-width: 1100px) {
 text-align: center;
  }

`
export const NameItem = styled.span`
margin-bottom: 25px;
font-weight: 600;

`
export const Name = styled.span`
margin: 0 15px;
font-weight: 700;
`
export const ItemInfoBox = styled.span`

@media (max-width: 1000px) {
 text-align: center;
  }
`
export const Span = styled.span`
color: ${props=>props.theme.orange};

`

