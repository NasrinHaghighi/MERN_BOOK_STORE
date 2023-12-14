import React from 'react'
import EmptyLayout from '../../../Layout/EmptyLayout';
import DashboardLayout from '../../../components/Dashboard/DashboardLayout';
import OrderDetails from '../../../components/Dashboard/OrderDetails/OrderDetails';
import {OrderBox} from '../../../components/Dashboard/OverView/styles'
import { useRouter } from 'next/router';


function OrederDetail() {
  const router = useRouter()
  const orderId=router.query.orderId
console.log(orderId)
  return (
    <DashboardLayout>
      <OrderBox>
         <OrderDetails orderId={orderId}/> 
       </OrderBox>
    </DashboardLayout>
  )
}


OrederDetail.layout = EmptyLayout;
export default OrederDetail










