import React from 'react'
import {IndexConatiner} from '../../components/Card/CardIndexstyles'
import Progressbar from '../../components/Checkout/Progressbar/Progressbar'
import NotFound from '../../components/Notfound/NotFound'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'


function CheckoutIndex() {
  const user=useAppSelector(((state: { user: any; })=> state.user))
  let token =user.token
 
  return (

    <>
    {token ? <Progressbar /> : <NotFound />}
    </>

  )
}

export default CheckoutIndex