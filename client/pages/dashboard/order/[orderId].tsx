import React from 'react'
import EmptyLayout from '../../../Layout/EmptyLayout';
import DashboardLayout from '../../../components/Dashboard/DashboardLayout';
import OrderDetails from '../../../components/Dashboard/OrderDetails/OrderDetails';
import {OrderBox} from '../../../components/Dashboard/OverView/styles'
import { useRouter } from 'next/router';


function OrederDetail() {
  //console.log(order)

  return (
    <DashboardLayout>
      <OrderBox>
         {/* <OrderDetails order={order}/> */}
       </OrderBox>
    </DashboardLayout>
  )
}


OrederDetail.layout = EmptyLayout;
export default OrederDetail



// export const getStaticPaths = (async () => {
//   const response = await fetch(`http://localhost:4000/api/v1/userorder`);
 
//   const data = await response.json();

//   const paths=data.order.map((order:any)=>{
//     return{
//       params:{orderId: `${order._id}`}
//     }
//   })
//   return {
//     paths,
//     fallback: true, // false or "blocking"
//   }
// })


// export async function getStaticProps(context:any) {
//   const { params } = context;
//   const res = await fetch(`http://localhost:4000/api/v1/userorder/${params.orderId}`);
//   console.log(res)
//   const order = await res.json();

//   return {
//     props: {
//      order
//     },
//   };
// }






