import styled ,{keyframes} from "styled-components";



export const Wapper=styled.div`
width:100% ;
height:100px ;
position:sticky ;
top:0 ;
z-index:6 ;
background-color: ${props=>props.theme. mainBG};
`

export const HeaderWrapper = styled.nav`
    position: relative;
    z-index: 99;
    max-width: 1520px;
 margin:0 auto ;
 padding:0 50px ;
    height:100px ;
    display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  gap: 20px;
    @media (max-width:1200px) {
  display: none;
  }
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
export const Title = styled.div`
text-align: left;
font-size: 25px;
`
export const Icons = styled.div`
text-align: right;
display: flex;
justify-content:flex-end;

`
export const IconItem=styled.div`
margin: 0 15px;
color:#f4b41a;
font-size: 20px;
position: relative;
cursor: pointer;

`
export const Num=styled.div<{
    order:string
}>`
position: absolute;
font-size: 16px;
color:#fff; 
background-color:${props=> props.order ? props=>props.theme.red : props=>props.theme.green} ;
border-radius: 50%;
width: 20px;
height: 20px;
line-height: 20px;
display: flex;
justify-content: center;
align-items: center;
top: -5px;
right: -13px;

`
 