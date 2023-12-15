import React from 'react'
import { Title, Box, PieBox} from '../SaleChart/styles'

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';



const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
function PieChartComponent() {
  const data = [
    { name: 'Art', value: 400 },
    { name: 'Kids', value: 300 },
    { name: 'Romance', value: 200 },
   
  ];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index ,name}:any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor='middle' dominantBaseline="central" style={{ fontSize: '14px' ,fontWeight: '700'}}>
        {/* {` ${name} ${(percent * 100).toFixed(0)}%`} */}
        <tspan x={x} dy="1em">{name}</tspan>
      <tspan x={x} dy="1.2em" style={{ fontSize: '12px' }}>{(percent * 100).toFixed(0)}%</tspan>
      </text>
    );
  };
  
  return (
    <Box>
    <Title>Trending Categories</Title>
   <PieBox>
   <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"

          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </PieBox>  
    
    </Box>
  )
}

export default PieChartComponent










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