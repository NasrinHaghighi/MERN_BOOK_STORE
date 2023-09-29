import styled ,{keyframes}from "styled-components";

/*tablet anim for desktop and mobile*/
const FadIn= keyframes`
from { opacity: 0; right:0}
    to { opacity:1; right:50px}; 
    
`;
const Fadout= keyframes`
from { opacity: 1; right:50px}
    to { opacity:0; right:0px}; 
    
`;
const FadInTabletRes= keyframes`
from { opacity: 0; right:0}
    to { opacity:1; right:10px}; 
    
`;
const FadoutTabletRes= keyframes`
from { opacity: 1; right:10px}
    to { opacity:0; right:0px}; 
    
`;
/*phone anim for desktop and mobile*/
const FadIn2= keyframes`
from { opacity: 0; right:0}
    to { opacity:1; right:365px}; 
    
`;
const Fadout2= keyframes`
from { opacity: 1; right:365px}
    to { opacity:0; right:0px}; 
    
`;
const FadIn2Res= keyframes`
from { opacity: 0; right:0}
    to { opacity:1; right:250px}; 
    
`;
const Fadout2Res= keyframes`
from { opacity: 1; right:250px}
    to { opacity:0; right:0px}; 
    
`;
/*phone anim for desktop and mobile*/
const FadIn3= keyframes`
from { opacity: 0; top:300PX}
    to { opacity:1; top:230px}; 
    
`;
const Fadout3= keyframes`
from { opacity: 1; top:230px}
    to { opacity:0; top:300px}; 
    
`;
const FadInBlue= keyframes`
from { opacity: 0; }
    to { opacity:1; }; 
    
`;
const FadoutBlue= keyframes`
from { opacity: 1;}
    to { opacity:0; }; 
    
`;

const TextFadIn=keyframes`
from { opacity: 0;transform:scale(0.5)}
    to { opacity:1;;transform:scale(1) }; 
    
`;

const TextFadOut=keyframes`
from { opacity:1;transform:scale(1)}
    to { opacity:0;;transform:scale(0.5) }; 
    
`;
export const Container = styled.div`
height:150vh ;
padding:50px 0 ;
margin-bottom:200px;
@media (max-width: 1200px) {
    margin-bottom:500px;
  }
@media (max-width: 700px) {
    margin-bottom:700px;
  }
`
export const InnerContainer = styled.div`
max-width:1720px ;
margin:0 auto ;
display:flex ;
justify-content:space-between ;
align-items:center ;
@media (max-width: 1200px) {
    flex-direction: column;
    
  }
`


export const Anim = styled.div`
background-color: red;
width:100% ;
position:relative ;
@media (max-width: 700px) {
  margin-right: 130px;
  margin-top: 50px;
    
  }
  @media (max-width: 500px) {
  margin-right: 0px;
  margin-top: 50px;
    
  }
`


export const Tablet=styled.div`
position:absolute ;
z-index:4;
right:50px ;
opacity:0 ;
&.enter{
    animation: ${FadIn} 1s forwards;
}
&.exit{
    animation: ${Fadout} 1s forwards;
}

@media (max-width:700px) {
    &.enter{
    animation: ${FadInTabletRes} 1s forwards;
}
&.exit{
    animation: ${FadoutTabletRes} 1s forwards;
}
  }

`
export const Phone=styled.div`
position:absolute ;
z-index:5 ;
opacity:0 ;
right: 365px;
top: 118px;
&.enter{
    animation: ${FadIn2} 2s forwards;
}
&.exit{
    animation: ${Fadout2} 2s forwards;
}
@media (max-width:700px) {
    &.enter{
    animation: ${FadIn2Res} 2s forwards;
}
&.exit{
    animation: ${Fadout2Res} 2s forwards;
}
  }
`

export const AduioDiv=styled.div`
position:absolute ;
z-index:3 ;
opacity:0 ;
top:400px ;
 &.enter{
    animation: ${FadIn3} 2s forwards;
}
&.exit{
    animation: ${Fadout3} 2s forwards;
}
@media (max-width:700px) {
    display: none;
  }
`
export const Blue=styled.div`
position:absolute ;
z-index:1 ;
right:401px ;
top:26px ;
&.enter{
    animation: ${FadInBlue} 1s forwards;
}
&.exit{
    animation: ${FadoutBlue} 1s forwards;
}
@media (max-width:700px) {
    display: none;
  }
`
export const Headphone=styled.div`
position:absolute ;
z-index:2 ;
right:300px ;
top:-128px ;
&.enter{
    animation: ${FadInBlue} 1s forwards;
}
&.exit{
    animation: ${FadoutBlue} 1s forwards;
}
@media (max-width:700px) {
    display: none;
  }
`
/*TEXT PART*/
export const Text = styled.div`
text-align:center ;
width:100% ;
padding-top:200px ;

transform:scale(0.5) ;
&.enter{
animation: ${TextFadIn} 1s forwards;
}
&.exit{
animation: ${TextFadOut} 1s forwards;
}
h1{
    font-size:54px;
    margin-bottom:40px ;
}
h2{
    font-size:64px;
    margin-bottom:40px ;
    color:${props=>props.theme.orange}
}
h3{
   font-size:34px; 
   margin-bottom:20px ;
}
`
