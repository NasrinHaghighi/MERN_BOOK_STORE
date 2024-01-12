import styled from "styled-components";


export const Container=styled.div`
width: 90%;
margin: 0 auto;
`
export const Title=styled.div`
font-size: 28px;
font-weight: 700;
color: ${props=>props.theme.orange};
margin-bottom: 30px;

`
export const InnerContiner=styled.div`
background-color: ${props=>props.theme.white};
padding: 30px 50px;
border-radius: 10px;
`

export const Titles=styled.div`
height: 50px;
width:100% ;

//background-color:${props=> props.theme.bachgroundColor} ;
display: grid;
grid-template-columns:1fr 2fr 1fr 1fr 1fr ;

grid-column-gap: 0px;
grid-row-gap: 0px;
align-items:center ;
&>span{
  font-size: 18px;
  font-weight: 700;

}

`