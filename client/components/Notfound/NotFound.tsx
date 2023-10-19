import React from 'react'
import {Box, Title,SubTit,LinkS, ImageDiv } from './styles'
import Link from 'next/link'
import { Images } from '../../helpers/Image'
import Not from '../../public/images/notfoundbook.png'

function NotFound() {
  return (
    <Box>
        <Title>404</Title>
        <SubTit>Page cannot be found</SubTit>
        <LinkS href='/'>Back to home page</LinkS>
        <ImageDiv></ImageDiv>
        {/* <Images src={Not} width={} height={400}   alt="book"/> */}
    </Box>
  )
}

export default NotFound