import React,{useEffect} from 'react'
import jwt from 'jsonwebtoken';
import ProtectedRout from '../../components/ProtectedRoute';
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import EmptyLayout from '../../Layout/EmptyLayout'
import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import OverView from '../../components/Dashboard/OverView/OverView';
import { useRouter } from 'next/router'; 
interface JwtPayload {
  role: string | null;
 
}


function DashboardIndex() {
  const router = useRouter();
  const user=useAppSelector(((state: { user: any; })=> state.user))
  const token=user.token
  const decodedToken = jwt.decode(token) as JwtPayload | null;
  //console.log(decodedToken?.role)

  // if (!decodedToken || decodedToken.role !== 'admin') {
  //   router.push('/');
  //   return null
  // }


  useEffect(() => {
    router.push('/');
  }, [!decodedToken])
  

  return (
    <>

     <ProtectedRout allowedRoles={decodedToken?.role}> 
    <DashboardLayout>

    <OverView />
  
    </DashboardLayout>
    </ProtectedRout>
    </>
  )
}
DashboardIndex.layout = EmptyLayout;
export default DashboardIndex