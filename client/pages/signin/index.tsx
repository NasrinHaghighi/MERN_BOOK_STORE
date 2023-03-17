import React from 'react'
import Signin from '../../components/Ahuth/Signin/Signin'
import Signup from '../../components/Ahuth/Signup/Signup'
import {Conatiner} from '../../components/Ahuth/indexStyles'
function index() {
  return (
    <Conatiner>
    <Signin />
    <Signup />
    </Conatiner>
  )
}

export default index