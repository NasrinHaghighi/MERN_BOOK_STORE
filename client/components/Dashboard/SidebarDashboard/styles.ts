import styled ,{keyframes} from "styled-components";
import Modal from '@mui/material/Modal';
import { Dropdown } from "react-bootstrap";


const comeIn= keyframes`
from { width: 0; opacity:0}
    to { width:300px; opacity:1}; 
    
`;
const comeOut= keyframes`
from { width: 300px; opacity:1}
    to { width:10px; opacity:0}; 
    
`;
const comeInIcon= keyframes`
from {  opacity:0}
    to { opacity:1}; 
    
`;
const comeOutIcon= keyframes`
from {  opacity:1}
    to {  opacity:0}; 
    
`;
export const Main=styled.div`
position: relative;

@media (max-width:1400px) {
  display: none;
}
`

export const SidbarBox=styled.div`
position: relative;
width:350px;
height: auto;
padding:30px;
transition: all 0.2 ease-in-out;
@media (max-width:1400px) {
  display: none;
  /* border-right: 1px solid red;
width: 0;
opacity: 0;
 &.show{
  position: absolute;
 z-index: 99;
  animation: ${comeIn} 0.5s forwards;
 } 
 &.notShow{

  animation: ${comeOut} 0.5s forwards;
 }  */
}
`
export const RoleBoxx=styled.div<{
  modal?:string 
}>`
background-color:${props=>props.modal === 'modal' ?'#f5f5f5' : '#fff'};
display: grid;
grid-template-columns: 1fr 3fr .75fr;
grid-template-rows: 1fr;
padding:15px;
border-radius: 10px;
transition: all 0.2s ease-in-out;
animation: inherit;


`
export const Photo=styled.div`

background-image:url('/images/man_avatar3.jpg') ;
background-repeat:no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  /* &.show{

animation: ${comeInIcon} 0.5s forwards;
} 
&.notShow{

animation: ${comeOutIcon} 0.5s forwards;
}  */
`
export const Info=styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(2, 1fr);
padding: 0 15px;
transition: all 0.2s ease-in-out;



`
export const Name=styled.div`
color:${props=>props.theme.orange};
font-weight: 700;

`
export const Role=styled.div`
color: ${props=>props.theme.graytext};


`
/**********NAV BAr */
export const Navbar=styled.div`
margin: 50px 0;
transition: all 0.2s ease-in-out;


`
export const IconItem=styled.span`
font-size:25px;
margin-right:10px;

`
export const NavItem=styled.div`
text-align: left;

cursor: pointer;
margin-bottom: 10px;
padding: 10px 20px;
font-weight: 500;
color: #000;
font-size: 15px;
transition: all 0.2s ease-in-out;

border-right: 4px solid transparent;
    border-left: 4px solid transparent;
&.active{
    background-color:${props=>props.theme.hoverOrange} ;
    color: ${props => props.theme.orange};
border-radius:5rem;
border-left-color: #ff6e40;
border-right-color: #ff6e40;

} 
    &:hover {
    ${IconItem} {
        transform: scale(1.2) !important;
    }
    color: ${props => props.theme.orange};
  }
`

/*********modal */

export const SidebarModal=styled(Modal)`
position: absolute;

z-index: 99;
width:350px;
display: none;
transition: all 0.2 ease-in-out;
@media (max-width:1400px) {
&.show{
display: block;
} 
&.notShow{
  display: none;
}  
}

`
export const ModalBox=styled.div`
background-color: #fff;
padding:30px;
height: 100vh !important;
padding-bottom: 400px;
`

export const CloseIcon=styled.div`
color: ${props=>props.theme.orange};
font-weight: 700;
font-size: 24px;
display: flex;
justify-content: flex-end;
`

export const LogOut=styled.div`
font-size: 24px;
`
export const DropDownMenu=styled(Dropdown.Menu)`
transform: translate(-50px, 30px) !important; 
display:${props=>props.show ? 'block' : 'none'};
font-size: 12px;

`