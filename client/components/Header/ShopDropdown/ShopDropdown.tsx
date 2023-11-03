import React ,{useState}from 'react'
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
import {DropDownMenuShop,DropdownSS,  DropDownToggle, DropdownItem,Top, Bottom, Off, Shop, ImageDiv, First, Second, Third, Fourth, CateGoryTit} from './styles'

import {Images} from '../../../helpers/Image'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {selectedScroll} from '../../../features/scrollTo'


function ShopDropdown() {
    const [show, setShow] = useState(false);
const dispatch=useAppDispatch()
    const handelScroll=(f:string)=>{
        //e.prventDefault()
        dispatch(selectedScroll(f))
    
    }

  return (
    <DropdownSS
    onMouseOver={() => setShow(true)}
    onMouseLeave={() => setShow(false)}
    >
    <DropDownToggle variant="success" id="dropdown-basic">
      Shop
    </DropDownToggle>

    <DropDownMenuShop show={show}>
        <Top>
            <First> <ul>
            <CateGoryTit>Section</CateGoryTit>
              <hr/>
                <DropdownItem onClick={()=>{handelScroll('featuers');setShow(false); }}><Link href='/#feat'>Features</Link></DropdownItem>


                <DropdownItem href="/" 
                onClick={()=>{handelScroll('audio');setShow(false) }}
                ><Link href='/#audio'>Aduio</Link></DropdownItem>

                <DropdownItem href="/"
                onClick={()=>{handelScroll('timeline');setShow(false)}}><Link href='/#timeline'>TimeLine</Link></DropdownItem>
                  </ul>
            </First>
           
            <Second>
              <ul>
              <CateGoryTit>Category</CateGoryTit>
              <hr/>
              <DropdownItem  onClick={()=>setShow(false) }><Link href='/books'>Art</Link></DropdownItem>
              <DropdownItem onClick={()=>setShow(false) }><Link href='/books'>Biography</Link></DropdownItem>
              <DropdownItem onClick={()=>setShow(false) }><Link href='/books'>Children Books</Link></DropdownItem>
              <DropdownItem onClick={()=>setShow(false) }><Link href='/books'> Craft & Hobbies</Link></DropdownItem>
              <DropdownItem onClick={()=>setShow(false) }><Link href='/books'>Romance</Link></DropdownItem>
              </ul>
            </Second>
            <Third></Third>
            <Fourth>
            <Images src='/books/23.jpg' width={200} height={250}   alt="book"/>
            </Fourth>
        </Top>
        {/* <Bottom>
            <ImageDiv>
        <Images src='/images/drop.png' width={600} height={200}   alt="book"/></ImageDiv>
        <Off>
            <span>20%  Off Select Books</span>
            <h1>Summer’s Most Anticipated Reads</h1>
            <Shop>Shop Now</Shop>
        </Off>

        </Bottom> */}
   

      {/* <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
    </DropDownMenuShop>
  </DropdownSS>
  )
}

export default ShopDropdown