import React from 'react'
import {Wapper, HeaderWrapper, Logo, Title, Icons, IconItem, Num} from './styles'
import {BsMailbox2} from 'react-icons/bs'
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from 'next/router'




function DashboardHeader() {
  const router = useRouter()



  
  const showTit=()=>{
if(router.pathname === '/dashboard'){
  return 'Overview'
}
if(router.pathname === '/dashboard/order'){
  return 'Orders'
}
  }




  return (
    <Wapper>
        <HeaderWrapper>
        <Logo>logo</Logo>
        <Title>{showTit()}</Title>
        <Icons>
            <IconItem> <BsMailbox2 /><Num order=''>2</Num></IconItem>
            <IconItem><FaShoppingCart /><Num order='order'>3</Num></IconItem>

        </Icons>
        </HeaderWrapper>
    </Wapper>
  )
}

export default DashboardHeader