import styled ,{keyframes} from "styled-components";

export const SidbarBox=styled.div`

width: 350px;
height: auto;
padding:30px;

`
export const RoleBox=styled.div`
background-color: #fff;
display: grid;
grid-template-columns: 1fr 3fr;
grid-template-rows: 1fr;
padding:15px;
border-radius: 10px;

`
export const Photo=styled.div`

background-image:url('/images/man_avatar3.jpg') ;
background-repeat:no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`
export const Info=styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(2, 1fr);
padding: 0 15px;


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
transition: all 0.3s ease-in-out;


`
export const IconItem=styled.span`
font-size:25px;
margin-right:10px;

transition: transform 0.3s ease-in-out; 
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

/*********px*NAV BAr */