import styled from "styled-components";

export const Container=styled.div`
padding:0 10px ;
margin:50px 0 50px 0;

@media (max-width:700px) {
   margin: 0 auto;

}

`
export const Top=styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
height:80px ;
width:100% ;
padding:10px 60px ;
 

`
export const Layout=styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
@media (max-width: 700px) {
   display: none;
  }
`

export const Grid=styled.div`


&>span{
   
    cursor: pointer;
    width:30px ;
    height:30px ;
    font-size:30px ;
    margin:0 10px ;
   
    &.active{
        color:orange;
    }
}
`
export const BooksConatiner=styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr;
grid-column-gap:20px;
grid-row-gap: 20px;
max-width:350px;
@media (max-width:1650px) {
    grid-template-columns: repeat(3, 1fr);


}
@media (max-width:1200px) {
    grid-template-columns: repeat(3, 1fr);


}
@media (max-width:900px) {
    grid-template-columns: repeat(2, 1fr);


}
@media (max-width:700px) {
    grid-template-columns: repeat(1, 1fr);

}


`
export const LoadMore=styled.button`
background-color:${props=>props.theme.orange} ;
width:300px ;
height:50px ;
border-radius: 5px;
text-align:center ;
border:none ;
position:relative ;
font-size:18px ;
font-weight:700 ;
&::before {
    content: "";
    position: absolute;
    width: 0px;
    height: 5px;
    right:5px;
    bottom: 0;
    background-color: #DB1037;
    background-image: linear-gradient(90deg, #DB1037, #CD40E6);;
    transition: .3s ease;
  }
  &:hover {
    &::before {
        width: 95%; 
    }

}

`
export const BooksConatiner2=styled.div`


`
export const ResDiv=styled.div`
@media (max-width: 700px) {
   display: none;
  }
`
/*******SHOW FILters....componete */

 export const ShowFiltersBox=styled.div`
padding: 20px 30px ;
 display: flex;
 justify-content: flex-start;
 @media (max-width: 700px) {
 flex-direction: column;
 justify-content: center;
 align-items: center;
  }
 `
  export const InnerBox=styled.div`
background-color: ${props=>props.theme.white};
padding:10px 20px ;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
margin-right: 20px;
font-size: 20px;
  font-weight: 600;
  @media (max-width: 700px) {
margin-bottom: 15px;

  }
  `
  export const Label=styled.span`
  font-size: 20px;
  font-weight: 600;
color: ${props=>props.theme.orange};
  `