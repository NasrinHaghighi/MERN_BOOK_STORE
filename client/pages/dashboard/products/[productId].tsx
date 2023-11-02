import React from 'react'
import EmptyLayout from '../../../Layout/EmptyLayout';
import DashboardLayout from '../../../components/Dashboard/DashboardLayout';
import ProductDetailCo from '../../../components/Dashboard/ProductDetailCo/ProductDetailCo';

import { bookType } from '../../../types/bookType'
import {OrderBox} from '../../../components/Dashboard/OverView/styles'
interface Product{
    product:bookType
}

function ProductDetail({product}:Product) {
    console.log(product)
  return (
    <DashboardLayout>
          <OrderBox>
           <ProductDetailCo product={product}/>
           </OrderBox>
    </DashboardLayout>
  )
}

ProductDetail.layout = EmptyLayout;
export default ProductDetail

export const getStaticPaths = (async () => {
    const response = await fetch(`http://localhost:4000/api/v1/books`);
    const data = await response.json();
    const paths=data.books.map((book:any)=>{
      return{
        params:{productId: `${book._id}`}
      }
    })
    return {
      paths,
      fallback: true, // false or "blocking"
    }
  })
  
  
  export async function getStaticProps(context:any) {
    const { params } = context;
    const res = await fetch(`http://localhost:4000/api/v1/books/${params.productId}`);
    //console.log(res.status)
    const product = await res.json();
  
    return {
      props: {
        product
      },
    };
  }