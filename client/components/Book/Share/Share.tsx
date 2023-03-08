import React from 'react'
import {FaFacebookF,FaInstagram, FaTelegramPlane} from 'react-icons/fa'

import {Conatiner, Tit, Icons} from './style'

function Share() {
  return (
    <Conatiner>
        <Tit>Share</Tit>
        <Icons>
            <div> <FaFacebookF /></div>
            <div><FaInstagram /></div>
            <div><FaTelegramPlane/></div>
           
            
            
        </Icons>
    </Conatiner>
  )
}

export default Share