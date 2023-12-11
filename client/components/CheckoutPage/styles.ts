import styled from "styled-components";

export const Wrapper=styled.div`
width: 80%;

margin: 50px auto;
height: auto;
padding:10px 30px 100px 30px ;
@media (max-width: 1200px) {
    width:100%;
    text-align: center;
    padding:0;
    
  }
  @media (max-width: 600px) {
    width: 90%;
    padding:0 ;
    margin: 50px auto;
  
  }
`
export const ProgressBarBox=styled.div`
position: relative;

@media (max-width: 600px) {
  width: 100%;
 margin: 0 auto;
 
  }

`
export const IconBox=styled.div`
position: absolute;
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;

top:-15px;
&.address{
  left: 38%;
}
&.method{
  left: 55%;
  @media (max-width: 750px) {
    left: 50%;
 
  }
  @media (max-width: 400px) {
    left: 48%;
 
  }
}
&.confirmation{
  left:75%;
  @media (max-width: 600px) {
    left: 70%;
 
  }
}
`
export const IconDiv=styled.div`
border: 2px solid ${props=>props.theme.orange};
border-radius: 50%;
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
color: ${props=>props.theme.orange};
margin-bottom: 20px;
background-color: ${props=>props.theme.mainBG};
&.active{
  color: red;
  border: 2px solid ${props=>props.theme.red};
}
`

export const TitIcon=styled.p`
font-weight: 600;
font-size: 14px;
@media (max-width: 600px) {
  transform: rotate(-90deg);
  margin-top: 40px;
 
  }
`

export const BtnBox=styled.div`
width: 80%;
display: flex;
margin: 0 auto;
justify-content: space-evenly;
align-items: center;
`

export const Btn=styled.button`
padding: 15px 20px;
font-size: 18px;
font-weight: 700;
border: none;
outline: none;
border-radius: 10px;
color:  ${props=>props.theme.white};
background-color: ${props=>props.theme.orange};
&:hover{
  color:  ${props=>props.theme.white};
}
&.disable{
  opacity: .4;
}
`
export const SubmitBtn=styled.button`
padding: 15px 20px;
font-size: 18px;
font-weight: 700;
border: none;
outline: none;
border-radius: 10px;
color:  ${props=>props.theme.white};
background-color: ${props=>props.theme.success};
&:hover{
  color:  ${props=>props.theme.white};
}
`