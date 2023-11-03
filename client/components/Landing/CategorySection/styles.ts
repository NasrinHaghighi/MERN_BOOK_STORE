import styled from 'styled-components'




export const Conatiner=styled.div`
max-width: 100%;
 margin:0 auto ;
`
export const InnerConatiner=styled.div`
  max-width: 1920px;
    margin:100px auto ;
    padding:0 80px ;
    @media (max-width: 700px) {
        padding:0 20px ;
  }

`
export const Title=styled.div`
    font-weight:700 ;
    position:relative ;
    margin-bottom:30px ;
    font-size: 2rem;
    position:relative ;
    &:after{
    content: " ";
    width: 30px;
    height: 3px;
    background-color:${props=>props.theme.orange} ;
    position: absolute;
    left: 0;
    bottom:-10px ;
 } 

`
export const Top=styled.div`
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
    margin-bottom: 50PX;
    @media (max-width: 900px) {
    flex-direction: column;
  }

`
export const ViewAll=styled.div`
    font-size: 1.2rem;
    font-weight:600 ;
    color:${props=>props.theme.orange} ;
    @media (max-width: 900px) {
    margin-bottom: 20px;
  }

`
export const Content=styled.div`
display: grid;

grid-template-columns: repeat(4, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 50px;
grid-row-gap: 30px;

  & > :nth-child(4) {
    @media (max-width: 1400px) and (min-width: 1100px) {
      grid-column: 2 / span 3;
    }
  }
@media (max-width: 1400px) {
  grid-template-columns: repeat(3, 1fr);
grid-template-rows: 2fr;
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
grid-template-rows: repeat(4, 1fr);
align-items: center;
  justify-items: center;
  & > :nth-child(1),
  & > :nth-child(4) {
    grid-column-gap: 20px;
    grid-column: 1 / span 2; /* Span 2 columns (across two columns) */
  }
  }
  @media (max-width: 900px) {

    grid-template-columns: 1fr;
    & > :nth-child(1),
  & > :nth-child(4) {
    grid-column-gap: 20px;
    grid-column: 1 / span 1; /* Span 2 columns (across two columns) */
  }
  }

 
 
 

 

  
 


`
export const CategoryItem=styled.div`
  width:300px ;
  height:200px ;
  text-align:center ;
  border-radius:8px ;
 transition:all 0.3s ease-in-out ;
   &:hover{
    transform:translateY(-20px) ;
    box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.3);
    box-shadow:outset ${props=>props.theme.alertBoxshdow} ;
   } 

`