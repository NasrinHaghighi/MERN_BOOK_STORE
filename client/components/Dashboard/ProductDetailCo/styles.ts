import styled from "styled-components";




export const Box =styled.section`
background-color: ${props=>props.theme.white};
width: 80%;
padding:10px 30px  ;
border-radius: 10px;
display: flex;
flex-direction: column;

`
export const Title =styled.span`
font-size: 24px;
margin-bottom: 20px;

`
export const TitleBox =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width: 1200px) {
    flex-direction: column;
  }
`
export const Num =styled.span`
color: ${props=>props.theme.orange};
`
/************image div */

export const ImageDiv =styled.div`
border: 1px solid ${props=>props.theme.textgray};
padding: 10px 15px;
border-radius: 10px;
text-align: center;

`
interface PhotoDivProps {
    bg: string;
  }
export const PhotoDiv =styled.div<PhotoDivProps>`

border: 1px solid ${props=>props.theme.textgray};
padding: 10px 15px;
border-radius: 10px;
text-align: center;
background-image: url(${props => props.bg});
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center; 
  height: 295px;

`


export const Name =styled.div`
color: ${props=>props.theme.green};
font-size: 24px;
font-weight: 700;


`
export const Category =styled.div`
font-weight: 700;
font-size: 20px;
margin-bottom: 21px;

`
export const Span =styled.span`
font-weight: 500;


`

/************REmove */
export const Remove =styled.button`
font-weight: 500;
padding: 10px 15px;
border: none;
border-radius: 10px;
background-color: ${props=>props.theme.red};
color: ${props=>props.theme.white};
&:hover  {
  color: ${props=>props.theme.white};
  }
  &:active  {
  color: ${props=>props.theme.white};
  }
  &:focus  {
  color: ${props=>props.theme.white};
  }
`
