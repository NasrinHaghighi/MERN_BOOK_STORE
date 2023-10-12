
import { ChartOptions,ScaleType  } from 'chart.js';
import { Chart as ChartJS, ArcElement, Tooltip, Legend,CategoryScale,LinearScale,PointElement, LineElement, Title,Filler, BarElement } from "chart.js";
//import { faker } from '@faker-js/faker';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,LinearScale,PointElement, LineElement, Title,Filler, BarElement);




export const mainChartOptions:ChartOptions<'line'> ={
  
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title:{
        display:true,
      }
    },
    animations: {
          tension: {
            duration: 5000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
       
    scales: {
      
        x: {
            beginAtZero: false,
           ticks:{

           },
           grid:{display:false}
          },
      y: {
        suggestedMin: 0,
        suggestedMax: 50, 
       
        beginAtZero: false,
        position: 'left',
        ticks: {
            stepSize:15, // Set the step size to 5
          },
      },
    
    },
  
  
}
const months=['January', 'February', 'March', 'April', 'May', 'June','julho', 'agoust', 'sep', 'nov', 'dec']
export const getChartData=()=>{
   const data=months.map((item)=>{
    return Math.floor(Math.random() * 50)
   })
    return {
        labels:months ,
        datasets: [
          {
            label: 'My First Dataset',
            data:data,
            fill: false,
            borderColor: 'rgb(255, 152, 0)',
            pointStyle: 'star',
            pointRadius: 1, // Radius of the data points
            pointHoverRadius: 10, // Radius on hover
            pointBorderColor: 'rgb(255, 152, 0)', // Border color of the points
            pointBackgroundColor: 'rgb(255, 152, 0)',
          },
        ],
      };
}
/******************************* */

export const realTimeChartLabels=['-48h', '-46h', '-44h', '42h', '40h','38h', '30h', '25h',  ]

export const getrealtimetData=()=>{
    const data=realTimeChartLabels.map((item)=>{
     return Math.floor(Math.random()*1)
    })
     return {
         labels:realTimeChartLabels ,
         datasets: [
           {
             label: 'My First Dataset',
             data: [6, 5, 8, 8, 6],
           
             backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
              
              ],
              borderColor: [
                'rgb(255, 99, 132)',
              
              ],
              borderWidth: 1
           },
         ],
       };
 }

 export const mainBarChartOptions:ChartOptions<'bar'> ={
   
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title:{
        display:true,
      }
    },
          
    scales: {
      
        x: {
            beginAtZero: true,
            //  ticks:{
            //  callback:(label, index) =>(index === 0|| index===realTimeChartLabels.length) ? realTimeChartLabels :null,
            // autoSkip:false
            //  }
        },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5, // Set the tick interval to 10
        },
      },
    
    },
  
  
}