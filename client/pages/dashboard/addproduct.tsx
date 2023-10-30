import React from 'react'
import DashboardLayout from '../../components/Dashboard/DashboardLayout'
import EmptyLayout from '../../Layout/EmptyLayout'
import AddProductCo from '../../components/Dashboard/AddProductCo/AddProductCo';




function AddProduct() {
  return (
    <DashboardLayout>
   <AddProductCo />
    </DashboardLayout>
  )
}
AddProduct.layout = EmptyLayout;
export default AddProduct