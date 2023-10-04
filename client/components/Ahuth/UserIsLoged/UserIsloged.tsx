import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { useDispatch } from 'react-redux';
import { userLogout } from '../../../features/userSlice';
import {Name} from './styles'
function UserIsloged() {
    const dispatch=useDispatch()
    const user=useAppSelector(((state: { user: any; })=> state.user))



   const logoutedUser=()=>{
    dispatch(userLogout())
    localStorage.removeItem('name')
    localStorage.removeItem('token')
   }



  return (
    <div onClick={logoutedUser}><Name>{user.signinUser}!</Name> Logout</div>
  )
}

export default UserIsloged