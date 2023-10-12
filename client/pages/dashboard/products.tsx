import React from 'react'
import EmptyLayout from '../../Layout/EmptyLayout'
import DashboardLayout from '../../components/Dashboard/DashboardLayout'


function ProductsIndex() {
  return (
    <DashboardLayout>
    <div>products</div>
    </DashboardLayout>
  )
}
ProductsIndex.layout = EmptyLayout;
export default ProductsIndex