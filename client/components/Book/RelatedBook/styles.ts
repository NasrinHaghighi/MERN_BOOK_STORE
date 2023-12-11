import styled from "styled-components";

export const Box=styled.div`

padding: 50px 0;
margin: 50px 0;
@media (max-width: 950px) {
   text-align: center;
   margin: 0 auto;
 
    
  }
`

export const BookBox=styled.div`
margin: 50px 0 0 0;
display: flex;

@media (max-width: 950px) {
    max-width: 350px;
   margin: 0 auto;
  flex-direction: column;
    
  }
`