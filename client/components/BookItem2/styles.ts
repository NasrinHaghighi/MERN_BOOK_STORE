import styled from "styled-components";

export const BookItem2Container=styled.div`
display:flex ;
transition: all 0.5s linear;
display:grid ;
grid-template-columns:1fr 3fr ;
padding:15px ;

&:hover{
    border:2px solid ${props=>props.theme.grayBorder} ;
    box-shadow:${props=>props.theme.boxshadow} ;
    background-color: #ffff;
}
`
export const InfoContainer=styled.div`

padding-left:30px ;
&>h4{
    font-size:24px;
    font-weight:700 ;
    margin-bottom:30px ;

}
&>h5{
    font-size:26px;
    font-weight:700 ;
    margin-bottom:50px ;
}
`
export const ShowMoreBtn=styled.button`
width:130px;
height:40px ;
border-radius:8px ;
border:3px solid ${props=>props.theme.orange} !important;
color:${props=>props.theme.orange} !important;
transition: all 0.8s linear;
&:hover{
    color:${props=>props.theme.orange} ;
    border:3px solid ${props=>props.theme.textStrong} ;
}

`
export const Description=styled.p`
 font-size:18px;
   margin-bottom:15px ;
   transition: all 0.5s linear;
`
export const Add=styled.button`
border:none ;
background-color:transparent ;

`

