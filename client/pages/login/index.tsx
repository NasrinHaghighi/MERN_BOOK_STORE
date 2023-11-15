import React from 'react'
import Signin from '../../components/Ahuth/Signin/Signin'
import {Conatiner} from '../../components/Ahuth/indexStyles'
import EmptyLayout from '../../Layout/EmptyLayout'


function LoginIndex() {
  return (
    <Conatiner>
    <Signin />
  
    </Conatiner>
  )
}
LoginIndex.layout = EmptyLayout;
export default LoginIndex