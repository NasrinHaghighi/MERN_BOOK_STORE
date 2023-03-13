import styled ,{ keyframes }from "styled-components";

const fadein = keyframes`
0% { opacity: 0;right:-50px }
    25% { opacity:1;right:10px };
    85% { opacity:1;right:10px }; 
   100% { opacity:0;right:-50px }; 
`;
const border = keyframes`
0% { opacity: 0;width:0px }
  
   100% { opacity:1;width:100% }; 
`;


export const Box=styled.div`
position:fixed ;
text-align:center ;
right:-50px ;
padding:30px 10px ;
top:14% ;
z-index:10 ;
border-radius:8px ;
width:400px ;
height:200px ;

background-color:${props=>props.theme. grayBG} ;
box-shadow:${props=>props.theme.alertBoxshdow} ;
opacity:0 ;
&.active{
    animation:${fadein} 3s  forwards;
    &::before{
        animation:${border} 3s  forwards;
    }
}
&>h3{

    margin-bottom:30px ;
   &.add{color:green} 
    &.favo{color:red }
}
&>h6{
    font-size:22px ;
   
}
&::before{
    content:'' ;
    width:10px ;
    background-color: #DB1037;
    background-image: linear-gradient(90deg, #DB1037, #CD40E6);;
    transition: .3s ease;
    height:5px ;
    opacity:0 ;
    bottom:0 ;
    left: 0;
    position:absolute ;
    border-radius:8px ;

}



`