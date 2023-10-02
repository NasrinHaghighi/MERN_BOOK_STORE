import styled from "styled-components";
import { Dropdown } from "react-bootstrap";


export const BasketbBox = styled.div`
border-left:1px solid ${props=>props.theme.grayBorder}  ;
display:flex ;
  justify-content:space-between ;
  align-items:baseline ;
  padding-left:20px ;


`

export const BasketContainer = styled.div`
color: ${props=>props.theme.linkColor};
font-size:18px ;
 /* border-left:1px solid ${props=>props.theme.grayBorder}  ;  */

`

export const ShopItems = styled.div<{
  wish: boolean;
}>`
background-color:${props=>props.wish ? 'red' : 'green'} ;
border-radius: 10px;
    padding: 2px 5px;
    color:#fff ;
    font-size:11px;
    margin-right:15px ;
`
export const ShopIcon = styled.div`
color:${props=>props.theme.orange} !important;

`
export const DropDownToggle = styled(Dropdown.Toggle)`
  background-color: transparent !important;
 border:none !important ;
  position: relative;
  overflow: hidden;
  width:100%;
  z-index:5 ;
  font-size:18px ;
  
  display:flex ;
  &::after{
display:none ;
  }
`

export const DropDownMenu = styled(Dropdown.Menu)<{
  show: boolean;
  res:boolean
}>`
transform: ${props => (props.res ? 'translate(-160px, 30px)' : 'translate(-0px, 30px)')} !important;
  //transform: translate(0px, 30px) !important;  
 width:350px ;
  box-shadow: ${props=>props.theme.alertBoxshdow};
 display:${props=>props.show ? 'block' : 'none'};
 padding:30px;

`;

export const DropDownItem = styled(Dropdown.Item)`
 
`
export const ItemContainer=styled.div`

padding:10px 0;
display:grid ;
grid-template-columns:1fr 3fr ;
align-items:center ;
`
export const Title=styled.div`
font-size:18px ;
font-weight:600 ;
margin-left: 10px;
&>span{
  color:${props=>props.theme.mainTextColor}
}

`
export const Right=styled.div`


`
export const Trash=styled.div`
text-align:center ;
color:${props=>props.theme.orange} ;
margin:0 20px ;

`
export const Bottom=styled.div`

display:flex ;
justify-content:center ;
align-items:center ;
padding:30px 10px ;
border-radius:8px;
`

export const Card=styled.button`
cursor:pointer ;
width:300px ;
padding:10px 15px ;
border:none ;
background-color:${props=>props.theme.orange} ;
border-radius:8px;
color:#fff !important;
box-shadow:${props=>props.theme.alertBoxshdow} ;
`

export const EmptyCard=styled.div`
text-align: center;

`