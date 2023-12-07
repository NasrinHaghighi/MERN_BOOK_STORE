import styled ,{ keyframes } from "styled-components";
import { FaHeart } from 'react-icons/fa';



const fadein = keyframes`
from { opacity: 0;top:-50px }
    to { opacity:1;top:0px };
    
`;


export const BoxConatiner = styled.div`
position:relative ;
max-width: 1520px;
 margin:0 auto ;


`;

export const Container=styled.div`
padding:50px 50px ;
 display: grid;
grid-template-columns: 1fr 2fr 1fr;
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
@media (max-width: 1400px) {
  grid-template-columns: 1fr;
 margin:0 auto;
 justify-items: center;
  }
  @media (max-width: 500px) {
    padding:10px !important ;
  }
`

//***middel column********** */
export const  BookDetail=styled.div`

margin: 10px 35px;
`
export const BookTitle=styled.h1`
color:${props=>props.theme.textStrong} ;
border-bottom:1px solid ${props=>props.theme.grayBorder} ;
margin-bottom:30px ;
`

export const BookFormat=styled.div`
font-size:20px;
margin:10px 0 ;
`
export const BookAuthor=styled.div`
font-size:20px;
margin:10px 0 ;
`

export const Description=styled.div`
margin-bottom: 30px;
`

//////animated book*///////////////////////
export const Page=styled.div<{
  bg?: string;
}>`
display: block;
position: absolute;
left: 0;
top: 0;
width: 300px;
height:400px;
background: ${props => `url(${props.bg}) no-repeat `};
background-position: center;
  background-size: cover;
padding: 0;
margin: 0;
 background-color: #fff; // Old browsers */
transform-origin: 0 50% 0;
transform-style: preserve-3d;
transition: all .5s cubic-bezier(0.25,1,.25,1);
&.page1{
 
  display: none;
transform: rotateY(20deg) translateZ(-1px);
}
&.page2{
  display: none;
transform: rotateY(30deg) translateZ(-2px);
}
&.page3{
  display: none;
transform: rotateY(40deg) translateZ(-3px);
}
&.cover{
  z-index: 2 !important;
display: block;
width: 300px;
height:400px;
transform: rotateY(0deg) translateZ(0px);
&:after {
    content: 'Hover On Me';
    position: absolute;
    font-weight:700;
    color:${props=>props.theme.orange};
    top: 50%;
    right:35%;
    transform: translateY(-50%);
    border:2px solid ${props=>props.theme.orange};
    padding:2px 5px;
    border-radius:5px;

  }

}
`
export const ImageDiv=styled.div`
display: block;
float: left;
width: 300px;
height:400px;
margin: 0 0 50px 0;
padding: 0;
 background: #333; 
transform: translate3d(0,0,0);
transition:all 0.3 ease ;
&:hover{
  ${Page} {
      &.page1 {
       display:block ;
       border:1px solid ${props=>props.theme.grayBorder} ;
        transform: rotateY(-25deg);
      }
    
      &.page2 {
        display: block;
        border:1px solid ${props=>props.theme.grayBorder} ;
        transform: rotateY(-20deg);
      }
      &.page3 {
        display: block;
        border:1px solid ${props=>props.theme.grayBorder} ;
        transform: rotateY(-15deg);
      }
      &.cover {
        transform: rotateY(-30deg);
      }
    }
}
&>ul{
  display: block;
position: relative;
width: 300px;
height:400px;
margin: 0px;
padding: 0;
list-style: none;
perspective-origin: 0 50% 0;
perspective: 800px;
transform: translate3d(0,0,0);
}

`
///////////////////////////////////////////////////////////

export const ConatinerInfo=styled.div`
text-align:left ;
padding-bottom: 150px;
&>h1{
  font-size:56px ;
    color:${props=>props.theme.textStrong};
    letter-spacing:.2rem;
}
&>h2{
  font-size:32px ;
    color:${props=>props.theme.textStrong};
    color:${props=>props.theme.textStrong};
    margin:20px 0 ; 
}
`
export const Authors=styled.div`
margin:10px 0 ;
font-size:28px ;
color:${props=>props.theme.orange};

`
export const Discription=styled.div`
margin:30px 0 ;
font-size:26px ;
`
export const Price=styled.div`
margin:30px 0 ;
font-size:30px ;
color:${props=>props.theme.textStrong};
`
export const BtnConatiner =styled.div`
display:flex ;
`
export const Button=styled.button`
width:170px ;
height:50px ;
border-radius:50px ;
outline:none ;
margin-left:20px ;
border:3px solid ${props=>props.theme.orange};
color:${props=>props.theme.orange};
font-size:20px ;
font-weight:600 ;
transition:all 0.3 ease-in-out ;
&:hover{
    color:${props=>props.theme.orange};
    border:3px solid ${props=>props.theme.textStrong}; 
}

` 

export const Input = styled.input`
width:288px ;
height:50px ;
border-radius:50px ;
padding:0 10px ;
outline:none ;
border:3px solid ${props=>props.theme.grayBorder};

font-size:20px ;
font-weight:600 ;
  ::placeholder {
    
  }
`;

export const SeeCardBtn=styled.button`
color:#fff !important;
font-size:18px ;
padding:10px 15px;
border:none ;
border-radius:8px ;
transition:all 0.5 ease-in-out ;
background-color:${props=>props.theme.orange} ;
float:left;
z-index:10;
&:hover{
 color:#fff !important;
 box-shadow:${props=>props.theme.boxshadow} !important;
 transform:scale(1.1)!important;
}
`
/*related book box*/
export const RelatedBookBox=styled.div`


`

/************Alert************* */


export const AlertBox = styled.div`
background-color:${props=>props.theme.blue2} ;
border-radius:8px ;
max-width: 1720px;
display:flex ;
justify-content:space-between ;
align-items:center ;

  left: 0; 
  right: 0; 
top:-50px ;
  margin-left: auto; 
  margin-right: auto; 
 padding: 50px ;
 opacity:0;
  position:absolute ;
 box-shadow:${props=>props.theme.alertBoxshdow} ;
 color: ${props=>props.theme.textStrong};
 font-size: 28px;
 font-weight:700 ;
&>div{
 &>span{
  font-style:italic ;
  color: #ffff;
 }}
 &.show{
  animation:${fadein} .8s .5s forwards;
  
 }
`;
