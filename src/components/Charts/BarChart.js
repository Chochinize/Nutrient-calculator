import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(
    zoomPlugin,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  
  scales:{
      y:{
          ticks:{
              color:'green'
          }
      },
      x:{
          ticks:{
              color:'white',
              font: {
                weight: "bold",
              },
            },
      }
  },
  plugins: {
    zoom:{
        pan: {
            // Boolean to enable panning
            enabled: true,

            // Panning directions. Remove the appropriate direction to disable 
            // Eg. 'y' would only allow panning in the y direction
            mode: 'xy'
        },
        zoom:{
            drag:true,
            wheel:{
                enabled:true,
            },
            pinch:{
                enabled:true,
            },
            
            mode:'xy',
        },
    }, 
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
    
  },
};

const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const data = {
  labels,
  datasets: [
    {
        data: [30,50,100],
        label: "My First dataset",
        fillColor: ["rgba(0,10,220,0.5)","rgba(220,0,10,0.5)","rgba(220,0,0,0.5)","rgba(120,250,120,0.5)" ],
        strokeColor: "rgba(220,220,220,0.8)", 
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
    },
    {
      label: 'Dataset 2',
      data: [30,50,100],
      backgroundColor: 'white',
    },
  ],
};

export default function BarChart(){
  return <Bar options={options} data={data} />;
}
