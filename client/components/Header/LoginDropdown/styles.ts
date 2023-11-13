import styled  from "styled-components";
import { Dropdown } from "react-bootstrap";



export const LoginBox=styled.div``

export const DropDownToggle = styled(Dropdown.Toggle)`
  background-color: transparent !important;
 border:none !important ;
  position: relative;
  overflow: hidden;
  width:100%;
  z-index:5 ;
  font-size:18px ;
  color: ${props=>props.theme.orange} !important;
  display:flex ;

  &::after{
display:none ;
  }
`

export const DropDownMenu = styled(Dropdown.Menu)<{
    show: boolean;
    modal:any
     }>`
transform: ${props => (props.modal ? 'translateX(-30px) translateY(30px)' : 'translateX(30px) translateY(30px)')} !important;
display:${props=>props.show ? 'block' : 'none'};
font-size: 18px;
`
export const DropDownItem = styled(Dropdown.Item)<{
    color: string;
     }>`
 text-align: center;
 color:${props=>props.color ? 'orange' :' '} ;
 & >span{
    color:${(props)=>props.theme.green};
   font-style: italic;
   font-weight: 700;
 }
`