import React ,{useState,useEffect}from 'react'
import Dropdown from 'react-bootstrap/Dropdown';



//const user=localStorage.getItem('name')


function WelcomMsg() {
const [userName, setUserName] =useState<string | null>('')
  


    const logouthandel=()=>{
        localStorage.clear();
    }


  return (
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
   
  </Dropdown.Toggle>
   <Dropdown.Menu>
  
   <Dropdown.Item onClick={logouthandel}>Logout</Dropdown.Item>
 </Dropdown.Menu>
 </Dropdown>
  )
}

export default WelcomMsg