import React from 'react'
import EmptyLayout from '../../../Layout/EmptyLayout';
import DashboardLayout from '../../../components/Dashboard/DashboardLayout';
import ProductDetailCo from '../../../components/Dashboard/ProductDetailCo/ProductDetailCo';

import { bookType } from '../../../types/bookType'
import {OrderBox} from '../../../components/Dashboard/OverView/styles'
import { useRouter } from 'next/router';




function ProductDetail() {
  const router = useRouter()
  const productId=router.query.productId
//console.log(productId)
  return (
    <DashboardLayout>
          <OrderBox>
           <ProductDetailCo productId={productId}/> 
           </OrderBox>
    </DashboardLayout>
  )
}

ProductDetail.layout = EmptyLayout;
export default ProductDetail

