import styled from "styled-components";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
export const Container=styled.div`

max-width: 100%;
 margin:0 auto ;


`

export const InnerConatiner=styled.div`
max-width: 1520px;
margin:100px auto ;
    padding:0 80px ;
    @media (max-width: 700px) {
        padding:0 20px ;
  }

`
export const TitleDiv=styled.div`
max-width: 1520px;
text-align:center ;
 

`

export const SubTitle=styled.h6`
color: ${props=>props.theme.graytext};
margin:20px 0 ;
/* @media (max-width:1200px) {
    display:none;


} */
`

export const Div=styled.div`
text-align:center ;

`
export const Photo=styled.div`
position:absolute ;
bottom: 5px;
border-radius:50% ;
overflow: hidden;

&.even{
right:0 ;

}
&.odd{
left:0 ;
}

@media (max-width:1200px) {
    &.even{
right:0 ;

}
&.odd{
left:0 ;
}
}
@media (max-width:900px) {
display: none;
}
`
export const SS=styled(VerticalTimelineElement)`

@media (max-width: 1200px) {
    font-size: 10px;
  }

`
export const BookCover=styled.div<{
    img:string}
>`
margin:0 auto;
width:300px;
height:350px;
background-image: url(${(props) => props.img});
background-size: cover;
background-position: center;
border-radius:10px;
@media (max-width: 700px) {
    width:180px;
height:200px;
  }

`

