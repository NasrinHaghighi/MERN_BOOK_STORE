import React,{useState} from 'react'
import { Wapper, HeaderWrapper, Logo, Title, Icons, IconItem, Num , Menu, HeaderWrapperRes} from './styles'
import { BsMailbox2 } from 'react-icons/bs'
import { FaShoppingCart } from "react-icons/fa";

import {dashboardSideStatus} from '../../../features/dashboardSideSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import {HiOutlineMenuAlt1} from 'react-icons/hi'

function DashboardHeader() {
  const dispatch =useAppDispatch()

const handelSidebar=()=>{
  dispatch(dashboardSideStatus())
}
//console.log(openSide)
  return (
    <Wapper>
      <HeaderWrapper>
       
        <Logo>logo</Logo>
        <Title></Title>
              <Icons>
          <IconItem> <BsMailbox2 /><Num order=''>2</Num></IconItem>
          <IconItem><FaShoppingCart /><Num order='order'>3</Num></IconItem>

        </Icons>
      </HeaderWrapper>
      <HeaderWrapperRes>
       <Menu onClick={handelSidebar} style={{zIndex:10}}><HiOutlineMenuAlt1/></Menu>
       <Logo>logo</Logo>
      
             <Icons>
         <IconItem> <BsMailbox2 /><Num order=''>2</Num></IconItem>
         <IconItem><FaShoppingCart /><Num order='order'>3</Num></IconItem>

       </Icons>
     </HeaderWrapperRes>
    </Wapper>
  )
}

export default DashboardHeader



  /** */
  // const showTit = () => {
  //   if (router.pathname === '/dashboard') {
  //     return 'Overview'
  //   }
  //   if (router.pathname === '/dashboard/order') {
  //     return 'Orders'
  //   }
  // }

  /** */