import React from 'react'
import DashboardLayout from '../../../components/Dashboard/DashboardLayout'
import EmptyLayout from '../../../Layout/EmptyLayout'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Link from 'next/link';
import {bookType} from '../../../types/bookType'
import {Title, OrderBox,Tabel, DataGridS, DataGridRes, TabelRes, TabelSmall}  from '../../../components/Dashboard/OverView/styles'

interface Books{
    books:bookType[]
}


  
  const getRowId = (row: any) => row._id;


function ProductsIndex({books}:any) {
  

  return (
    <DashboardLayout>
       <OrderBox>
  <Title>Products</Title>
  <Tabel >
 <DataGrid
        rows={books.books}
        columns={columns}
        rowHeight={100}
        margin-bottom={100}
        getRowId={getRowId}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 25 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      /> 
  </Tabel>
  {/* second table */}
  <TabelRes style={{ maxWidth: '100%', overflowX: 'auto' }}>
    <DataGridRes
    rows={books.books}
    columns={columnsRes}
    getRowId={getRowId}
    rowHeight={130}
    margin-bottom={100}
    
    initialState={{
      pagination: {
        paginationModel: { page: 0, pageSize: 5 },
      },
    }}
    pageSizeOptions={[5, 10]}
   
  />


    </TabelRes>
    {/* third table */}
    <TabelSmall style={{ maxWidth: '100%', overflowX: 'auto' }}>
    <DataGridRes
    rows={books.books}
    getRowId={getRowId}
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
    </TabelSmall>
 </OrderBox>  
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


/* reduce clumn depend of screen size*/
/*this for biger 900 */
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
        style={{ width: '100px',  height: '90px', borderRadius:'10px'  }}
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
      width: 100,
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
    { field: 'price', headerName: 'Initial Price', width: 100,   renderCell: (params) => (
      <strong >{params.value }</strong> 
     ), },
    {
      field: 'discont',
      headerName: 'Discont',
      sortable: true,
      width: 100,
       renderCell: (params) => (
       <strong style={{color:'orange'}}>{params.value } %</strong> 
      ),
    
    },
    {
      field: 'finalPrice',
      headerName: 'Final Price',
      width: 100,
      renderCell: (params) => {
       
        const initialPrice = parseFloat(params.row.price || 0);
        const discount = parseFloat(params.row.discont || 0);
  
        const finalPrice = initialPrice - (initialPrice * (discount / 100));
  
        return <strong style={{color:'blue'}}>{finalPrice.toFixed(2)}</strong>;       },
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
  /*this for 900-600 */
  const columnsRes: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 70,
   renderCell: (params) => (
     <span>{params.value.substring(0,5)}</span> 
  ),
 },
    { field: 'imageUrl', headerName: 'Image', width: 100 ,  sortable: false,   renderCell: (params) => (
      <img
        src={params.value} 
        alt="Product Image"
        style={{ width: '50px',  height: '90px', borderRadius:'10px'  }}
      />
    ),},
    { field: 'name', headerName: 'Name', width: 100 ,
    
   renderCell: (params) => (
      <strong>{params.value.substring(0,15)}</strong> 
     ),

},
    
    {
      field: 'stock',
      headerName: 'Stock',
      type: 'string',
      width: 70,
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
    { field: 'price', headerName: 'Initial Price', width: 70,   renderCell: (params) => (
      <strong >{params.value }</strong> 
     ), },
    {
      field: 'discont',
      headerName: 'Discont',
      sortable: true,
      width: 50,
       renderCell: (params) => (
       <strong style={{color:'orange'}}>{params.value } %</strong> 
      ),
    
    },
    {
      field: 'finalPrice',
      headerName: 'Final Price',
      width: 70,
      renderCell: (params) => {
       
        const initialPrice = parseFloat(params.row.price || 0);
        const discount = parseFloat(params.row.discont || 0);
  
        const finalPrice = initialPrice - (initialPrice * (discount / 100));
  
        return <strong style={{color:'blue'}}>{finalPrice.toFixed(2)}</strong>;       },
    },
     {
      field: ' ',
      headerName: 'Action',
      
      width: 50,
      renderCell: (params) => (
        <Link 
        style={{cursor:'pointer'}}
        href={`/dashboard/products/${params.id}`}
        
        >...</Link> 
      ),},
    
  ];

/*this for less than600 */
const columnsSmall: GridColDef[] = [
  { field: '_id', headerName: 'ID', width: 50,
 renderCell: (params) => (
   <span>{params.value.substring(0,5)}</span> 
),
},
  { field: 'name', headerName: 'Name', width: 100 ,
  
 renderCell: (params) => (
    <strong>{params.value.substring(0,15)}</strong> 
   ),

},
  
  {
    field: 'stock',
    headerName: 'Stock',
    type: 'string',
    width: 50,
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
  { field: 'price', headerName: 'Initial Price', width:50,   renderCell: (params) => (
    <strong >{params.value }</strong> 
   ), },
  {
    field: 'discont',
    headerName: 'Discont',
    sortable: true,
    width: 50,
     renderCell: (params) => (
     <strong style={{color:'orange'}}>{params.value } %</strong> 
    ),
  
  },
  {
    field: 'finalPrice',
    headerName: 'Final Price',
    width: 50,
    renderCell: (params) => {
     
      const initialPrice = parseFloat(params.row.price || 0);
      const discount = parseFloat(params.row.discont || 0);

      const finalPrice = initialPrice - (initialPrice * (discount / 100));

      return <strong style={{color:'blue'}}>{finalPrice.toFixed(2)}</strong>;       },
  },
   {
    field: ' ',
    headerName: 'Action',
    
    width: 50,
    renderCell: (params) => (
      <Link 
      style={{cursor:'pointer'}}
      href={`/dashboard/products/${params.id}`}
      
      >...</Link> 
    ),},
  
];