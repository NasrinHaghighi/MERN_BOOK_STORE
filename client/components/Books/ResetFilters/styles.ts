import styled from "styled-components";

export const Box=styled.div`
margin:200px auto ;
display:flex ;
flex-direction:column ;
justify-content:center ;
align-items:center ;
&>p{
   font-size :24px;
   font-weight:700 ;
}
`
export const ResetFiltersBtn=styled.div`
margin-top:35px ;
background-color:${props=>props.theme.orange} ;
width:300px ;
height:50px ;
line-height:50px ;
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