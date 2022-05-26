import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend,} from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut,Chart } from "react-chartjs-2";
import  useAuth from '../hooks/useAuth'

ChartJS.register(ArcElement, Tooltip, Legend,ChartDataLabels);

console.log(ChartDataLabels)
export default function BarChart() {
    const { state } = useAuth();
    console.log('state from Bar',state.dailies.protein)
  const [stateus, setState] = useState({
    labels: ["Protein", "Carbohydrate", "Fats"],
    datasets: [
      {
        data: [0,0,0],
        backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                  ],
        borderWidth: 1,
      },
    ],
  });
  
  const options = {
        plugins: {
          datalabels: {
            color: 'black',
            labels: {
              title: {
                font: {
                  weight: 'bold'
                }
              },
              value: {
                color: 'red'
              }
            }
          }
        }
  }

  useEffect(() => {
    setState({
      labels: ["Protein", "Carbohydrate", "Fats"],
      datasets: [
        {
          backgroundColor: [
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235 )',
            'rgba(255, 206, 86)',
          ],
          borderColor: "rgba(30,20,10,1)",
          borderWidth: 0.5,
          data: [state.dailies.protein.reduce((prev,next)=>prev+next,0),state.dailies.carbs.reduce((prev,next)=>prev+next,0),state.dailies.fats.reduce((prev,next)=>prev+next,0)],
        },
      ],
    });
  }, [state]);

  return <Doughnut data={stateus} options={options}/>;
}
