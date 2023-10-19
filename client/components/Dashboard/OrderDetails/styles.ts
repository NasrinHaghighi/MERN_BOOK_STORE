import styled from "styled-components";




export const Box =styled.section`
background-color: ${props=>props.theme.white};
width: 80%;
padding:10px 30px  ;
border-radius: 10px;
display: flex;
flex-direction: column;
`
export const Title =styled.span`
font-size: 24px;
margin-bottom: 20px;
`
export const Num =styled.span`
color: ${props=>props.theme.orange};
`

/************ */

export const UserInfo=styled.div`
display: flex;
`
export const Column=styled.div`

`
export const Tit=styled.div`
font-weight: 500;
`
export const SubTit=styled.div`

`
export const Container=styled.div`
border: 1px solid ${props=>props.theme.textgray};
padding: 10px 15px;
border-radius: 10px;
`
export const First=styled.div`
font-size: 20px;
margin: 15px 0;
`
export const Second=styled.div`
font-size: 20px;
margin: 15px 0;
`

/***********Button */
export const Button =styled.button`
padding: 8px 15px;
border-radius: 8px;
border: none;

opacity:0.4;
&.active{
    opacity:1;
}
&.Processing{
    background-color:${props=>props.theme.orange} ;
 
}
&.Shipped{
    background-color:${props=>props.theme.blue2} ;
 
}
&.Completed{
    background-color:${props=>props.theme.green} ;
    
}
&.Cancelled{
    background-color:${props=>props.theme.red} ;
    
}
`
export const Status =styled.span`
font-size: 24px;
font-weight: 600;
margin-bottom: 15px;
`