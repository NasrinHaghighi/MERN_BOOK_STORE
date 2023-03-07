import styled ,{keyframes}from "styled-components";


const FadIn= keyframes`
from { opacity: 0; right:0}
    to { opacity:1; right:50px}; 
    
`;const Fadout= keyframes`
from { opacity: 1; right:50px}
    to { opacity:0; right:0px}; 
    
`;
const FadIn2= keyframes`
from { opacity: 0; right:0}
    to { opacity:1; right:365px}; 
    
`;const Fadout2= keyframes`
from { opacity: 1; right:365px}
    to { opacity:0; right:0px}; 
    
`;
const FadIn3= keyframes`
from { opacity: 0; top:300PX}
    to { opacity:1; top:230px}; 
    
`;const Fadout3= keyframes`
from { opacity: 1; top:230px}
    to { opacity:0; top:300px}; 
    
`;
const FadInBlue= keyframes`
from { opacity: 0; }
    to { opacity:1; }; 
    
`;const FadoutBlue= keyframes`
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
height:100vh ;
padding:50px 0 ;

`
export const InnerContainer = styled.div`
max-width:1720px ;


margin:0 auto ;
display:flex ;
justify-content:space-between ;
align-items:center ;

`


export const Anim = styled.div`

width:100% ;
position:relative ;

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
