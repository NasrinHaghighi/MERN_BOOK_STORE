import React from 'react'
import Signup from '../../components/Ahuth/Signup/Signup'
import EmptyLayout from '../../Layout/EmptyLayout'
import {Conatiner} from '../../components/Ahuth/indexStyles'


function RegisterIndex() {
  return (
    <>
     <Conatiner>
        <Signup />
    </Conatiner>
    </>
  )
}
RegisterIndex.layout = EmptyLayout;
export default RegisterIndex