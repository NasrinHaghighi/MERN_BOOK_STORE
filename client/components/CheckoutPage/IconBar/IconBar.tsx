import React from 'react'
import {IconBox,IconDiv,TitIcon} from '../styles'


function IconBar({item,step}:any) {
   
  return (
    <IconBox className={item.id === 1 ? 'address' : item.id === 2 ? 'method' : 'confirmation'}>
        <IconDiv >{item.icon}</IconDiv>
       
        <TitIcon >{item.tit}</TitIcon>
    </IconBox>
  )
}

export default IconBar