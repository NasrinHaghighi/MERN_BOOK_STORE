import styled from 'styled-components'
export const Conatiner=styled.div`
max-width: 100%;
 margin:0 auto ;
`
export const InnerConatiner=styled.div`
  max-width: 1920px;
    margin:50px auto ;
    padding:0 50px ;


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
grid-template-columns: repeat(5, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 50px;
grid-row-gap: 0px;
@media (max-width: 1400px) {
    display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(1, 1fr);
grid-column-gap: 0px;
grid-row-gap: 30px;
justify-items: center;
  align-items: center;
  }  
   @media (max-width: 1200px) {
    display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 30px;
justify-items: center;
  align-items: center;

  } 
  @media (max-width: 1200px) {
  .grid-item:nth-child(4),
  .grid-item:nth-child(5) {
    grid-column: span 2; /* Span 2 columns */
  }
}
  
  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr;
  }

`
export const CategoryItem=styled.div`
  width:250px ;
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