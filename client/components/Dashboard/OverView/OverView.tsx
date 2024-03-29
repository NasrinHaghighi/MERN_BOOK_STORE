import React from 'react'

import {Container, Title} from './styles'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SaleChart from './SaleChart/SaleChart';
import PieChart from './PieChart/PieChart';
import OrderSale from './OrderSale/OrderSale';
import RecentReview from './RecentReview/RecentReview';
import PieChartComponent from './PieChart/PieChart';


function OverView() {
  return (
    <Container>
      <Title>Dashboard \ <span>Overview</span></Title>
      <hr/>
  <Grid container spacing={2} mb={4}>
  <Grid item xs={12} lg={8} >
    
   <SaleChart />
  </Grid>
  <Grid item xs={12} lg={4}>
    <PieChartComponent />
  </Grid>
  </Grid>
  <Grid container spacing={2}>
  <Grid item xs={12} lg={4}>
  <OrderSale sale={null} />
  </Grid>
  <Grid item xs={12} lg={4}>
   <OrderSale sale='sale'/> 

  </Grid>
  <Grid item xs={12} lg={4}>
 <RecentReview />
  </Grid>
 
</Grid>
    </Container>
  )
}

export default OverView