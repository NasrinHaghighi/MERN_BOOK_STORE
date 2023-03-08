import styled ,{ keyframes } from "styled-components";

export const Conatiner = styled.div`
display:flex ;
justify-content:flex-start ;
align-items:center ;
margin-bottom:35px;
`;
export const Tit = styled.div`
color:${props=>props.theme.textStrong} ;
font-weight:700 ;
margin-right:20px;
`;

export const Icons = styled.div`
font-size:15px ;
display:flex ;
justify-content:space-between ;
align-items:center ;
&>div{
    display:flex ;
justify-content:center ;
align-items:center ;
margin-right:10px ;
width:30px ;
height:30px ;
line-height:30px ;
border-radius:50% ;
transition:all 0.5s ease;
background-color:${props=>props.theme. lightGray} ;
&:hover{
    background-color:${props=>props.theme. mainTextColor} ;
}
}
`;

