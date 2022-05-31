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
import moment from 'moment'

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
  maintainAspectRatio: false,
  responsive: false,
  layout:{
    padding:{
      left:20
    }
  },
  scales:{
      y:{
        
          ticks:{
              color:'black',
          }
      },
      x:{
       ticks:{
        callback: function (value) {
                            return moment(value, "dd,hA Do").format("dd,hA,Do");
                          },
              color:'black',
              font: {
                weight: "bold",
                size:9,
              },
            },
      }
  },
  plugins: {
    zoom:{
      limits: {
        y: {min: 0, max: 100},
      },
        pan: {
            enabled: true,
            mode: 'yx',
            drag:true,
        },
        zoom:{
            drag:true,
            wheel:{
                enabled:true,
            },
            pinch:{
                enabled:true,
            },
            
            mode:'yx',
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

const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const data = {
  labels,
  datasets: [
    {
       data: [30,50,100],
        backgroundColor:"rgba(255, 206, 86)",
        label: "My First dataset",
        // fillColor: ["rgba(0,10,220,0.5)","rgba(220,0,10,0.5)","rgba(220,0,0,0.5)","rgba(120,250,120,0.5)" ],
        // strokeColor: "rgba(220,220,220,0.8)", 
        // highlightFill: "rgba(220,220,220,0.75)",
        // highlightStroke: "rgba(220,220,220,1)",
    },
    {
      label: 'Dataset 2',
      data: [30,50,100],
      backgroundColor: "rgba(54, 162, 235 )",
    },
    {
      label: 'Dataset 3',
      data: [10,20,200],
      backgroundColor: 'rgba(255, 99, 132)',
    },
  ],
};

// "rgba(255, 99, 132)",
// "rgba(54, 162, 235 )",
// "rgba(255, 206, 86)",

export default function BarChart(){
  
  return (
    <div className="relative top-2">
        

    <Bar options={options} data={data} height={300}  width={450}/>

    
    
  </div>
  )
}
