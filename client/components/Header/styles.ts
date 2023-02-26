import styled from "styled-components";
import { Dropdown } from "react-bootstrap";

export const Wapper=styled.div`
width:100% ;
height:100px ;
background-color:#fff ;
position:sticky ;
top:0 ;
z-index:6 ;
`
export const HeaderWrapper = styled.nav`
    position: relative;
    z-index: 99;
    max-width: 1520px;
 margin:0 auto ;
 padding:0 50px ;
    height:100px ;
    display:flex ;
    align-items:center ;
    justify-content:space-between ;
   
`

export const Wrapper = styled.nav`
  display:flex ;
  align-items:center ;
`
export const Wrapper2 = styled.nav`
  display:flex ;
  align-items:center ;
  
`
export const Logo = styled.div`
  width:100px ;
  height:50px ;
color:#f4b41a;
font-weight:800 ;
  display:flex ;
  justify-content:center ;
  align-items:center ;
  font-size:28px ;
  border-radius:8px ;
  padding-left: 0px;
    padding-right: 10px;

`
export const Nav = styled.div`
border-left:1px solid ${props=>props.theme.grayBorder} ;
display:flex ;
justify-content:space-between ;
align-items:center ;

`

export const NavItem = styled.div`
padding:10px 13px ;
font-size:18px ;
display:flex ;
justify-content:center ;
align-items:center ;
position:relative ;
& > span {
   margin-left:10px ;
  }
&::before {
    content: "";
    position: absolute;
    width: 0;
    height: 5px;
    right: 0;
    bottom: 0;
    background-color: #DB1037;
    background-image: linear-gradient(90deg, #DB1037, #CD40E6);;
    transition: .3s ease;
  }
&:hover {
    &::before {
        width: 100%; 
    }

}
&.loginBtn{
   border: 3px solid ${props=>props.theme.orange};
    color: ${props=>props.theme.orange};
    border-radius: 5px;
}
`

export const Lens = styled.div`

font-size:18px ;
padding:0 30px ;
`


  export const DropDownMenu = styled(Dropdown.Menu)<{
  show: boolean;
}>`
  transform: translate(-200px, 30px) !important;  
  width:300px ;
  box-shadow: ${props=>props.theme.alertBoxshdow};
 display:${props=>props.show ? 'block' : 'none'}
`;
export const DropdownS = styled(Dropdown)`
  /* right: -16px !important; */
`;
export const DropDownToggle = styled(Dropdown.Toggle)`
  background-color: transparent !important;
 border:none !important ;
  position: relative;
  overflow: hidden;
  padding:0 30px ;
  font-size:18px ;
  color:${props=>props.theme.orange} !important;
  &::after{
display:none ;
  }
`

export const Input = styled.input`
width:100% ;
height:30px ;
border-radius:8px ;
border:1px solid ${props=>props.theme.orange} ;
padding:10px ;


`;