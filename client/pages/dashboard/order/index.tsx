import React ,{useState,useEffect} from 'react'
import DashboardLayout from '../../../components/Dashboard/DashboardLayout'
import EmptyLayout from '../../../Layout/EmptyLayout'
import {Title, OrderBox,Tabel, DataGridS, DataGridRes, TabelRes, TabelSmall}  from '../../../components/Dashboard/OverView/styles'
import axios from 'axios'
import { DataGrid, GridColDef, GridRowId, GridValueGetterParams } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

import Link from 'next/link';






function OrderIndex({users }:any) {
const {users:userList}=users
//console.log(userList)
/*now i have list of users that registed in app */



  /*get id*/

  // const formattedData = userCarts.map((item:any) => ({
  //   id: item._id, // Unique identifier for each row
  //   userId: order.userId,
  //   status: order.status,
  //   signinUser: order.signinUser,
  //   imageUrl:order.orderedBook.imageUrl,
  //   price:order.orderedBook.price,
  //  bookName:order.orderedBook.name,
  //  createdAt:order.orderedBook.createdAt,
    
  // }));


  return (
    <DashboardLayout>
       <OrderBox>
<Title>Orders</Title>
{/* first table */}
    {/* <Tabel  style={{ maxWidth: '100%', overflowX: 'auto' }}>
     <DataGridS
    rows={formattedData}
    columns={columns}
    rowHeight={130}
    margin-bottom={100}
    
    initialState={{
      pagination: {
        paginationModel: { page: 0, pageSize: 5 },
      },
    }}
    pageSizeOptions={[5, 10]}
    checkboxSelection
  /> 
    
    </Tabel>  */}
{/* second table */}
    {/* <TabelRes style={{ maxWidth: '100%', overflowX: 'auto' }}>
    <DataGridRes
    rows={formattedData}
    columns={columnsRes}
    rowHeight={130}
    margin-bottom={100}
    
    initialState={{
      pagination: {
        paginationModel: { page: 0, pageSize: 5 },
      },
    }}
    pageSizeOptions={[5, 10]}
   
  />


    </TabelRes>  */}
{/* third table */}
     {/* <TabelSmall style={{ maxWidth: '100%', overflowX: 'auto' }}>
    <DataGridRes
    rows={formattedData}
    columns={columnsSmall}
    rowHeight={130}
    margin-bottom={100}
    
    initialState={{
      pagination: {
        paginationModel: { page: 0, pageSize: 5 },
      },
    }}
    pageSizeOptions={[5, 10]}
   
  />
    </TabelSmall>  */}
    </OrderBox>  
    </DashboardLayout>
  )
}
OrderIndex.layout = EmptyLayout;
export default OrderIndex


export async function getStaticProps(context: any) {
  const res = await fetch('http://localhost:4000/api/v1/users');
  if (!res.ok) {
    throw new Error(`Failed to fetch data from the API. Status: ${res.status}`);
  }
  const users = await res.json();

  return {
    props: {
     users
    },
  };
}



/* reduce clumn depend of screen size*/
/*this for biger 900 */
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70, },
  { field: 'signinUser', headerName: 'User', width: 90, },
   { field: 'imageUrl', headerName: 'Image', width: 170 ,  sortable: false,   renderCell: (params) => (
    <img
      src={params.value} // Assuming `imageUrl` contains the image URL
    alt="Product Image"
       style={{ width: '100px', height: '90px', borderRadius:'10px' }}
    />
  ),},
  { field: 'bookName', headerName: 'Name', width: 170 ,renderCell: (params) => (
    <strong>{params.value.substring(0,15)}</strong> 
 ),},
    { field: 'price', headerName: 'Price', width: 80,   renderCell: (params) => (
     <strong >{params.value }</strong> 
   ), },
{
    field: 'status',
    headerName: 'Status',
    type: 'string',
    width:150,
    renderCell: (params) => {
      let cellStyle = {
        fontWeight: 'bold',
        color: 'black', // Default color
      };
  
      switch (params.value) {
        case 'procssing':
          cellStyle.color = 'orange';
          break;
        case 'shipped':
          cellStyle.color = 'blue';
          break;
        case 'completed':
          cellStyle.color = 'green ';
          break;
        case 'cancelled':
          cellStyle.color = 'red';
          break;
        default:
          cellStyle.color = 'black'; // Default color for other values
      }
  
      return <strong style={cellStyle}>{params.value}</strong>;
    },
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
/*this for 900-600 */
const columnsRes: GridColDef[] = [
  { field: '_id', headerName: 'ID', width: 70 },
  { field: 'signinUser', headerName: 'User', width: 90, },
  { field: 'imageUrl', headerName: 'Image', width: 120 ,  sortable: false,   renderCell: (params) => (
    <img
      src={params.value} // Assuming `imageUrl` contains the image URL
      alt="Product Image"
      style={{ width: '50px', height: '90px', borderRadius:'10px' }}
    />
  ),},
  { field: 'bookName', headerName: 'Name', width: 170 ,renderCell: (params) => (
    <strong>{params.value.substring(0,15)}</strong> 
 ),},
  // { field: 'price', headerName: 'Price', width: 80,   renderCell: (params) => (
  //   <strong >{params.value }</strong> 
  //  ), },
  {
    field: 'status',
    headerName: 'Status',
    type: 'string',
    width:150,
    renderCell: (params) => {
      let cellStyle = {
        fontWeight: 'bold',
        color: 'black', // Default color
      };
  
      switch (params.value) {
        case 'procssing':
          cellStyle.color = 'orange';
          break;
        case 'shipped':
          cellStyle.color = 'blue';
          break;
        case 'completed':
          cellStyle.color = 'green ';
          break;
        case 'cancelled':
          cellStyle.color = 'red';
          break;
        default:
          cellStyle.color = 'black'; // Default color for other values
      }
  
      return <strong style={cellStyle}>{params.value}</strong>;
    },
  },


  
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

/*this for less than600 */
const columnsSmall: GridColDef[] = [
  
  { field: 'id', headerName: 'ID', width: 100, },
  { field: 'signinUser', headerName: 'User', width: 120, },
  {
    field: 'status',
    headerName: 'Status',
    type: 'string',
    width:120,
    renderCell: (params) => {
      let cellStyle = {
        fontWeight: 'bold',
        color: 'black', // Default color
      };
  
      switch (params.value) {
        case 'procssing':
          cellStyle.color = 'orange';
          break;
        case 'shipped':
          cellStyle.color = 'blue';
          break;
        case 'completed':
          cellStyle.color = 'green ';
          break;
        case 'cancelled':
          cellStyle.color = 'red';
          break;
        default:
          cellStyle.color = 'black'; // Default color for other values
      }
  
      return <strong style={cellStyle}>{params.value}</strong>;
    },
  },


  
  {
    field: ' ',
    headerName: 'Action',
    sortable: true,
    width: 30,
    renderCell: (params) => (
      <Link 
      style={{cursor:'pointer'}}
      href={`/dashboard/order/${params.id}`}
      
      >...</Link> 
    ),},
  
];









  // const rows = modifiedOrders.flatMap((order:any) =>
  // order.booksList.map((book:any, index:number) => ({
  //   id: `${order._id}-${book._id}`, // Unique identifier for each row
  //   orderId: order._id,
  //   signinUser: order.signinUser,
  //   status: order.status,
  //   bookName: book.name,
  //   amount: book.amount,
  //   imageUrl:book.imageUrl,
  //   price:book.price,
  //   createdAt:book.createdAt,
  // }))
  // );


  // const modifiedOrders = orders.orders.map((order:any) => ({
  //   ...order,
  //   oid: order._id,
  // }));