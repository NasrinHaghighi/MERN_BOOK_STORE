import styled from "styled-components";
import { DataGrid, GridColDef, GridRowId, GridValueGetterParams } from '@mui/x-data-grid';

export const Container =styled.section`
background-color: ${props=>props.theme.white}; 
padding: 30px 30px;
margin: 30px 15px;
border-radius: 10px;

@media (max-width:1400px) {
    width: 70%;
margin: 0 auto;
  }
`
export const OrderBox =styled.div`
padding: 30px 30px;
margin: 30px 15px;
border-radius: 10px;
background-color: ${props=>props.theme.white}; 
@media (max-width:1400px) {
  
    width:95%;
    margin: 30px auto;

  }
  @media (max-width:700px) {
    padding: 30px 10px;

  }

`

export const Title =styled.h5`
margin-bottom: 35px;
&>span{
  color: ${props=>props.theme.orange};
}
`
export const Tabel =styled.div`

  height:600;
  width: 100%;
 background-color: ${props=>props.theme.mainBG};
 @media (max-width:1000px) {
 display: none;

  }

`
export const TabelRes =styled.div`
  height:600;
  width: 100%;
  background-color: ${props=>props.theme.mainBG};
 display: none;
 @media (min-width: 700px) and (max-width: 1000px){

  display: block;
  }

`
export const TabelSmall =styled.div`
  height:600;
  width: 100%;
  background-color: ${props=>props.theme.mainBG};
 display: none;
 @media (max-width:750px) {
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

