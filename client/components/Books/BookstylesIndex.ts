import styled from "styled-components";

export const BooksConatiner=styled.div`
max-width: 100%;
 margin:0 auto ;

padding:30px 50px ;
@media (max-width: 500px) {
  padding:0px 0 ;
 
  }
`


export const InnerConatiner=styled.div`
max-width: 1520px;
 margin:0 auto ;
 padding:0 50px ;
 display: grid;
grid-template-columns: 1fr 3fr;
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
@media (max-width: 1200px) {
    grid-template-columns: 1fr ;
  }
 
  @media (max-width: 500px) {
    padding:0  ;
  }
`