import React from 'react'
import { Title, ChartHeight, Box} from './styles'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function SaleChart() {
  const data = [
    {
      name: 'January',
      uv: 4000,
      Visit: 2400,
      Sale: 2400,
    },
    {
      name: 'February',
      uv: 3000,
      Visit: 1398,
      Sale: 2210,
    },
    {
      name: 'March',
      uv: 2000,
      Visit: 9800,
      Sale: 2290,
    },
    {
      name: 'April',
      uv: 1800,
      Visit: 7000,
      Sale: 5090,
    },
    {
      name: 'May',
      uv: 2000,
      Visit: 9800,
      Sale: 2290,
    },
    {
      name: 'June',
      uv: 2780,
      Visit: 3908,
      Sale: 2000,
    },
    {
      name: 'June',
      uv: 2780,
      Visit: 3908,
      Sale: 2000,
    },
    {
      name: 'July',
      uv: 1890,
      Visit: 4800,
      Sale: 2181,
    },
    {
      name: 'August',
      uv: 2390,
      Visit: 3800,
      Sale: 2500,
    },
    {
      name: 'September',
      uv: 3490,
      Visit: 4300,
      Sale: 2100,
    },
  ];
  return (
    <Box>
    <Title>Sales Chart</Title>
    <ChartHeight>
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Visit" stroke="#d47221" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Sale" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    
    
    </ChartHeight>
    </Box>
  )
}

export default SaleChart

