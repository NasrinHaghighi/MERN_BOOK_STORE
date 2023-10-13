import React ,{useState,useEffect} from 'react'
import DashboardLayout from '../../../components/Dashboard/DashboardLayout'
import EmptyLayout from '../../../Layout/EmptyLayout'

import { DataGrid, GridColDef, GridRowId, GridValueGetterParams } from '@mui/x-data-grid';

import Modal from '@mui/material/Modal';
import Link from 'next/link';




const columns: GridColDef[] = [
  { field: '_id', headerName: 'ID', width: 70,renderCell: (params) => (
    <span>{params.value.substring(0,5)}</span> 
  ), },
  { field: 'imageUrl', headerName: 'Image', width: 170 ,  sortable: false,   renderCell: (params) => (
    <img
      src={params.value} // Assuming `imageUrl` contains the image URL
      alt="Product Image"
      style={{ width: '100px', height: 'auto' }}
    />
  ),},
  { field: 'name', headerName: 'Name', width: 170 ,renderCell: (params) => (
    <strong>{params.value.substring(0,15)}</strong> 
  ),},
  { field: 'price', headerName: 'Price', width: 80 },
  {
    field: 'status',
    headerName: 'Status',
    type: 'string',
    width: 200,
  },
  {
    field: 'createdAt',
    headerName: 'Order date',
    sortable: true,
    width: 160,
    renderCell: (params) => (
      <div>{params.value.slice(0, params.value.indexOf('T'))}</div> 
    ),},

  
  {
    field: ' ',
    headerName: 'Action',
    sortable: true,
    width: 150,
    renderCell: (params) => (
      <Link 
      style={{cursor:'pointer'}}
      href={`/dashboard/order/${params.id}`}
      
      >...</Link> 
    ),},
  
];







function OrderIndex({orders, openModal }:any) {
  const modifiedOrders = orders.orders.map((order:any) => ({
    ...order,
    id: order._id,
  }));


  
  const [open, setOpen] = React.useState(false);
 


  const handleClose = () => {
    setOpen(false);
  };


  return (
    <DashboardLayout>





     
   <div style={{ height:600, width: '90%' }}>
   <DataGrid
        rows={modifiedOrders}
        columns={columns}
        rowHeight={100}
        margin-bottom={100}
       
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </DashboardLayout>
  )
}
OrderIndex.layout = EmptyLayout;
export default OrderIndex


export async function getStaticProps(context: any) {
  const res = await fetch('http://localhost:4000/api/v1/orders');
  //console.log(res.status)
  const orders = await res.json();

  return {
    props: {
     orders
    },
  };
}
