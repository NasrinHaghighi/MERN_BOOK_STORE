import React from 'react'
import DashboardLayout from '../../components/Dashboard/DashboardLayout'
import EmptyLayout from '../../Layout/EmptyLayout'


function OrderIndex() {
  return (
    <DashboardLayout>
    <div>OrderIndex</div>
    </DashboardLayout>
  )
}
OrderIndex.layout = EmptyLayout;
export default OrderIndex