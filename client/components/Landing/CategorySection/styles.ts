import styled from 'styled-components'
export const Conatiner=styled.div`
max-width: 100%;
 margin:0 auto ;
`
export const InnerConatiner=styled.div`
  max-width: 1920px;
    margin:0 auto ;
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
   

`
export const ViewAll=styled.div`
    font-size: 1.2rem;
    font-weight:600 ;
    color:${props=>props.theme.orange} ;
    

`
export const Content=styled.div`
   display:flex ;
   justify-content:space-between ;
   align-items:center ;
   margin:50px 0 ;
    

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