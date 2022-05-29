import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title,SubTitle,Filler } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut } from "react-chartjs-2";
import useAuth from "../hooks/useAuth";
import "chartjs-plugin-doughnut-innertext";
import moment from 'moment'
import gradient from 'chartjs-plugin-gradient';


ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels, Title,SubTitle,Filler,gradient);


console.log(ChartDataLabels);
export default function DoughnutChart() {
  const { state } = useAuth();
  

  const [stateus, setState] = useState({
    labels: ["Protein", "Carbohydrate", "Fats"],
    datasets: [
      {
        data: [0],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });
  

  const options = {
    responsive: true,
    layout: {
      
      padding: {
        top: 0,
        bottom: 0,
      },
    },

    plugins: {
      
      subtitle: {
        display: true,
        text:            `                                                                                              ${moment().format('ll')} `,
        position: "top",
        align:'middle',
        color:'black'
    },
      title: {
        
        display: true,
        font:{
          size:14
        },
        color:'black',
        position: "top",
        text:                                                                                 `                     LEGENDS`,
        align:'end',
        padding: {
          top: 30,
          
        },
      },
      datalabels: {
        
        formatter: (value, ctx) => {

          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map(data => {
              sum += data;
          });
          let percentage = (value*100 / sum).toFixed(2)+"%";
          return percentage;
      },
        align: "center",
        
        color: "black",
        font: {
          weight: "bold",
          size:12
        },
      },
        legend: {
        display: true,
        position: "right",
        align: "center",
        labels: {
          padding:16,
          boxWidth:14,
          // This more specific font property overrides the global property
          color:'black',
          font: {
              size: 14
          }
      }
      },
    },
  };

  const protein =   Math.ceil(
    state.dailies.protein.reduce((prev, next) => prev + next, 0)
  )
  useEffect(() => {
    setState({
      labels: ["Protein", "Carbohydrate", "Fats"],
      
      datasets: [{
          backgroundColor: [
            "rgba(255, 99, 132)",
            "rgba(54, 162, 235 )",
            "rgba(255, 206, 86)",
          ],
          borderColor: "rgba(30,20,10,1)",
          borderWidth: 0.5,
          data: [
          protein,
            Math.ceil(
              state.dailies.carbs.reduce((prev, next) => prev + next, 0)
            ),
            Math.ceil(
              state.dailies.fats.reduce((prev, next) => prev + next, 0)
            ),
          ],
        },
      ],
    });
  }, [state]);

  const calories = Math.ceil(state.dailies.cc.reduce((prev, next) => prev + next, 0)*10);

  return (
    <div className="relative top-2">
        
      <header className="text-center relative -top-2  text-black mx-[30px]">
        <div className="text-[16px] font-bold absolute xs:text-[3vw] ">
          Daily graph showing % of nutritions based on calories

        </div>
      </header>

      <div className='absolute flex top-[250px] left-[162px] text-[14px] flex-wrap w-12 xs:left-[70px] xs:top-[170px] '>
        <span className='font-bold tracking-widest xs:text-[12px]'> {calories === 0 ? '': 'Calories'}</span>
        <div className='relative left-3 -top-3 text-[20px] font-bold xs:text-[12px] '>{calories === 0 ? '': calories}</div>
        </div>
      <Doughnut data={stateus} options={options}  />
      
    </div>
  );
}
