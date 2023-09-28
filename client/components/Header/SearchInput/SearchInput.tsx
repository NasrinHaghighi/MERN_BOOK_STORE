import React, {useState} from 'react'
import { Lens,DropdownS, DropDownToggle, DropDownMenu , Input} from '../styles'
import { BsSearch } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
import { useAppDispatch } from '../../../redux/hooks'
import {searchTerm} from '../../../features/searchSlice'
function SearchInput() {
    const dispatch=useAppDispatch()
    const [show, setShow] = useState(false);


    const searchHandel= (e:any)=>{
        dispatch(searchTerm(e.target.value))    
       }
  return (
    <Lens >
    <DropdownS      onMouseOver={() => setShow(true)}    onMouseLeave={() => setShow(false)} >
    <DropDownToggle className="main-style" id="dropdown-basic">
     <BsSearch />
    </DropDownToggle>

  <DropDownMenu show={show}>
    <Dropdown.Item >
        <Input onChange={searchHandel} ></Input>
    </Dropdown.Item>
   
  </DropDownMenu>
</DropdownS>
    </Lens>
  )
}

export default SearchInput