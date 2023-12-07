import React from 'react'
import { Title, Box, PieBox} from '../SaleChart/styles'
//import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
//import { Pie } from 'react-chartjs-2';



function PieChart() {
  return (
    <Box>
    <Title>Trending Categories</Title>
    {/* <PieBox>
     <Pie data={data} />
    </PieBox> */}
    
    </Box>
  )
}

export default PieChart










export const data = {
    labels: ['Art', 'Success', 'Language'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
            'rgb(13, 202, 240)',
            'rgb(102, 16, 242)',
            'rgb(253, 126, 20)',
       
         
        ],
        borderColor: [
            'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
         
        ],
        borderWidth: 1,
      },
    ],
  };