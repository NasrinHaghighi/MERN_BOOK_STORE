import React ,{useState, useEffect}from 'react'
import User from '../../../public/images/man_avatar3.jpg'
import {SidbarBox, RoleBox, Photo, Info,Name, Role, Navbar,NavItem,IconItem} from './styles'
import { Images } from "../../../helpers/Image";

import {BsBarChartFill} from 'react-icons/bs'
import {FaRegRectangleList, FaTruck} from 'react-icons/fa6'

import Link from 'next/link'
import { useRouter } from 'next/router'

function SidebarDashboard() {

  const router = useRouter()
const path=router.pathname
const [activepatch, setActivePath] =useState(path)

useEffect(() => {
  setActivePath(path)
}, [path])
console.log(activepatch)
  return (
    <SidbarBox>
        <RoleBox>
            <Photo >
           
            </Photo>
            <Info>
              <Name>Sara Admin</Name>
              <Role>Admin</Role>
            </Info>
        </RoleBox>
        <Navbar>
          {navItem.map((item, index)=>{
            return <NavItem 
            key={item.id} 
           className={activepatch === item.link ?'active' :''}
            // onClick={()=>handelClick(index)}
           >
              <Link href={item.link}>
                <IconItem>{item.icon}</IconItem>
                {item.title}
                </Link>
                </NavItem>
          })}
           
        </Navbar>

    </SidbarBox>
  )
}

export default SidebarDashboard


const navItem =[
    {id:1, title:'Dashboard', value:'dashboard', icon:<BsBarChartFill />,link:'/dashboard'},
    {id:2, title:'Oders', value:'orders', icon:<FaRegRectangleList />, link:'/dashboard/order'},
    {id:3, title:'Products', value:'products', icon:<FaTruck />, link:'/dashboard/products'},
]