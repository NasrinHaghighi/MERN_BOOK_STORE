import styled from "styled-components";
import { DataGrid, GridColDef, GridRowId, GridValueGetterParams } from '@mui/x-data-grid';

export const Container =styled.section`

padding: 30px 0;
margin: 0 15px;

@media (max-width:1400px) {
    width: 70%;
margin: 0 auto;
  }
`
export const OrderBox =styled.div`
padding: 30px 0;

@media (max-width:1400px) {
    width:80%;
    margin: 0 auto;

  }
 

`

export const Title =styled.h5`
margin-bottom: 35px;
`
export const Tabel =styled.div`
  height:600;
  width: 95%;
 background-color: #fff;
 @media (max-width:900px) {
 display: none;

  }

`
export const TabelRes =styled.div`
  height:600;
 background-color: #fff;
 display: none;
 @media (min-width: 600px) and (max-width: 900px){

  display: block;
  }

`
export const TabelSmall =styled.div`
  height:600;
 background-color: #fff;
 display: none;
 @media (max-width:600px) {
  display: block;

  }

`
export const DataGridS =styled(DataGrid)`

`
export const DataGridRes =styled(DataGrid)`
 display: none;
@media (max-width:900px) {
 display: block;

  }

`

