import React from 'react'
import jwt from 'jsonwebtoken';
import ProtectedRout from '../../components/ProtectedRoute';
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import EmptyLayout from '../../Layout/EmptyLayout'


interface JwtPayload {
  role: string | null;
 
}


function DashboardIndex() {
  const user=useAppSelector(((state: { user: any; })=> state.user))
  const token=user.token
  const decodedToken = jwt.decode(token) as JwtPayload | null;
  console.log(decodedToken?.role)
  return (
   // <ProtectedRout allowedRoles={decodedToken?.role}>
    <div>DashboardIndex</div>
    //</ProtectedRout>
  )
}
DashboardIndex.layout = EmptyLayout;
export default DashboardIndex