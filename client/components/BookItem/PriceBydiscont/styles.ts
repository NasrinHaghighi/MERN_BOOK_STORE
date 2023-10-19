import styled from "styled-components";

export const Box=styled.div`


`




export const Price=styled.div`
color:${props=>props.theme.graytext};
position: relative;

padding:3px;

&::before {
  content: "";
  position: absolute;
  top: 80%;
  left: 5px;
  width: 100%;
  height: 2px; /* Adjust the line thickness as needed */
  background-color: red; /* Line color */
  transform: translateY(-50%) rotate(-45deg);
  transform-origin: 0 0;
  z-index: -1; /* Place the line behind the text */

}
`
export const Discont=styled.div`
background-color: ${props=>props.theme.green};
padding: 3px;
border-radius: 8px;
color:#fff;
font-size: 12px;
display: flex;
justify-content: center;
align-items: center;
margin-left:10px;

`

export const Final=styled.div`
margin-left:6px ;`