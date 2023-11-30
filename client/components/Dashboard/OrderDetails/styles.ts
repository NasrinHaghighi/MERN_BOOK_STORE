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