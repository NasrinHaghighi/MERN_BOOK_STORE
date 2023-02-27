import styled from "styled-components";

export const Conatiner=styled.div`
font-size:24px ;
font-weight:600 ;
padding:20px ;
border:1px solid ${props=>props.theme.grayBorder} ;
`
 ;
 export const TitleBtn=styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
position:relative ;
transition:all 400ms ease ;
&:after {
  content: '+';
  color: #777;
  font-weight: bold;
position:absolute ;
right:0;

}
&.show{
    &:after {
  content: '-';

}
}
`
 ;
 export const List=styled.ul`
 margin-top:10px ;
 overflow-y:scroll ; 
 transition:height 400ms ease ;
    width: 100%;
    height: 200px;
    overflow-y: auto;
    position: relative;
    &::-webkit-scrollbar {
        width: 10px;
        border: 1px solid ${props=>props.theme.grayBorder};
        border-radius:8px ;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${props=>props.theme.orange};
        border-radius: 8px;
    }
  &.active{
    height: 500px;

   
}
&.unActive{
    height: 0;
   
  }
 `
  ;
  export const ListItem=styled.li`
font-size:18px ;
font-weight:500 ;
padding:15px 0;
transition:all 0.3s ease-in-out ;
&.activeItem{
    color:${props=>props.theme.orange} ;
}
  `
   ;