import React from 'react'
import { Title, ChartHeight, Box} from './styles'
//import { Line } from "react-chartjs-2";
//import {getChartData, mainChartOptions, } from '../ChartConfig'


function SaleChart() {
  return (
    <Box>
    <Title>Sales Chart</Title>
    <ChartHeight>
       {/* <Line options={mainChartOptions} data={getChartData()}/> */}
    </ChartHeight>
    </Box>
  )
}

export default SaleChart