import React from 'react'
import {Wapper, HeaderWrapper, Logo, Title, Icons, IconItem, Num} from './styles'
import {BsMailbox2} from 'react-icons/bs'
import { FaShoppingCart } from "react-icons/fa";
function DashboardHeader() {
  return (
    <Wapper>
        <HeaderWrapper>
        <Logo>logo</Logo>
        <Title>Overview</Title>
        <Icons>
            <IconItem> <BsMailbox2 /><Num order=''>2</Num></IconItem>
            <IconItem><FaShoppingCart /><Num order='order'>3</Num></IconItem>

        </Icons>
        </HeaderWrapper>
    </Wapper>
  )
}

export default DashboardHeader