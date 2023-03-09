import styled from "styled-components";

export const List=styled.ul`
margin-top:10px ;
overflow-y:scroll ; 
transition:height 400ms ease ;
   width: 100%;
   height:fit-content !important;
   overflow-y: auto;
   position: relative;
   &::-webkit-scrollbar {
       width: 10px;
       border: 1px solid ${props=>props.theme.grayBorder};
       border-radius:8px ;
   }
   &::-webkit-scrollbar-thumb {
       background-color: ${props=>props.theme.orange};
       border-radius: 8px;
   }
&.active{
   height: fit-content !important;
}
&.unActive{
   height: 0 !important;
}
`
 ;