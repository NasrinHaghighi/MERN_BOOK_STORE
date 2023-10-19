import styled from "styled-components";
import Link from "next/link";

import Not from '../../images/notfoundbook.png'
export const Box=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
background-color: #fff;
`
export const Title =styled.h1`
font-size: 80px;
font-weight: 700;
color: ${props=>props.theme.orange};
margin-bottom: 30px;
@media (max-width: 600px) {
    font-size: 50px;
  }
`

export const SubTit =styled.h3`
font-size: 36px;
margin-bottom:30px;
@media (max-width: 600px) {
    font-size: 20px;
  }
`

export const LinkS =styled(Link)`
background-color: ${props=>props.theme.orange};
margin-bottom:30px;
padding: 20px 30px;
border-radius: 10px;
color: #fff;
&:focus {
    color: #fff;
  }
  &:active {
    color: #fff;
  }
  &:hover {
    color: #fff;
  }

`
export const ImageDiv=styled.div`
width: 100%;
  height: 300px;
  background-image: url('/images/notfoundbook.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 2;

`