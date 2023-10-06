import styled from "styled-components";



export const Name=styled.span`
color: ${props=>props.theme.green};

font-weight: 600;

`
export const Box=styled.span`
display: flex;
flex-direction: column;
border-radius: 10px;
padding: 10px;
justify-content: center;
align-items: center;
width: 80px;
height: 80px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; ;
background-color: #ffe082;
`