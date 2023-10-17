import React from 'react'
import DashboardLayout from '../../../components/Dashboard/DashboardLayout'
import EmptyLayout from '../../../Layout/EmptyLayout'
import { DataGrid, GridColDef, GridRowId, GridValueGetterParams } from '@mui/x-data-grid';
import Link from 'next/link';
import {bookType} from '../../../types/bookType'

interface Books{
    books:bookType[]
}

const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 70,
   renderCell: (params) => (
     <span>{params.value.substring(0,5)}</span> 
  ),
 },
    { field: 'imageUrl', headerName: 'Image', width: 170 ,  sortable: false,   renderCell: (params) => (
      <img
        src={params.value} 
        alt="Product Image"
        style={{ width: '100px', height: 'auto' }}
      />
    ),},
    { field: 'name', headerName: 'Name', width: 170 ,
    
   renderCell: (params) => (
      <strong>{params.value.substring(0,15)}</strong> 
     ),

},
    
    {
      field: 'stock',
      headerName: 'Stock',
      type: 'string',
      width: 150,
      renderCell: (params) => {
        let cellStyle = {
          fontWeight: 'bold',
          color: 'black', // Default color
        };
    
        switch (params.value) {
          case 'In Stock':
            cellStyle.color = 'green';
            break;
          case 'Out of Stock':
            cellStyle.color = 'red';
            break;
          default:
            cellStyle.color = 'black'; // Default color for other values
        }
    
        return <strong style={cellStyle}>{params.value}</strong>;
      },
    },
    { field: 'price', headerName: 'Initial Price', width: 100 },
    {
      field: 'discont',
      headerName: 'Discont',
      sortable: true,
      width: 160,
       renderCell: (params) => (
       <div>{params.value } %</div> 
      ),
    
    },
  
    
    {
      field: ' ',
      headerName: 'Action',
      
      width: 150,
      renderCell: (params) => (
        <Link 
        style={{cursor:'pointer'}}
        href={`/dashboard/products/${params.id}`}
        
        >...</Link> 
      ),},
    
  ];
  
  const getRowId = (row: any) => row._id;


function ProductsIndex({books}:any) {
     /*get id*/
     //console.log(books.books)

  return (
    <DashboardLayout>
       <div style={{ height:600, width: '90%' }}>
      
 <DataGrid
        rows={books.books}
        columns={columns}
        rowHeight={100}
        margin-bottom={100}
        getRowId={getRowId}
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


ProductsIndex.layout = EmptyLayout;
export default ProductsIndex


export async function getStaticProps(context: any) {
    const res = await fetch('http://localhost:4000/api/v1/books');
    if (!res.ok) {
      throw new Error(`Failed to fetch data from the API. Status: ${res.status}`);
    }
    const books = await res.json();
  
    return {
      props: {
       books
      },
    };
  }