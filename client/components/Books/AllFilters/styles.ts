import styled from "styled-components";

export const Conatiner=styled.div`
height:fit-content ;
border-radius:8px ;
border:1px solid rgba(0, 0, 0, 0.1) ;
margin-top:50px ;
`
export const Title=styled.h2`

`
export const CategoryList=styled.ul`
display:flex;
flex-direction:column ;
font-size:22px ;
`

export const CategoryItem=styled.li`
border-bottom:1px solid rgba(0, 0, 0, 0.1) ;
transition:all 0.3 ease-in-out ;
padding:15px 0 ;
&:hover{
   background-color:${props=>props.theme.grayBG} ; 
   color: ${props=>props.theme.textStrong} ; 
}

`