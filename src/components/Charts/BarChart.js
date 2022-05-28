import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title,BarElement,CategoryScale,LinearScale} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import useAuth from "../hooks/useAuth";
import moment from 'moment'


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  

export default function BarChart() {
  const { state } = useAuth();

  const data =  {
    datasets: [{
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        data: [10, 20, 30, 40, 50, 60, 70]
    }]
};
const options = {
            layout: {
              padding: {
                top: 10,
                bottom:20,
                right: 20,
              },
            },
            tooltips: {
              mode: 'index',
              callbacks: {
               title:  function(chart, data) {
                  return data.labels;
                }
              }
            },
            showLines: true,
            scales: {
              xAxes: [{
                
                  plugins: {
                    streaming: {
                      frameRate: 5, // chart is drawn 5 times every second
                    },
                  },
                  type: "realtime",
                  distribution: "linear",
                  realtime: {
                    duration: 10000,
                    refresh: 2000,
                    delay: 2000,
                    onRefresh: function (chart) {
                      chart.data.datasets[0].data.push({
                        x: moment(),
                        y: Math.random()*5,
                      });
                    },
                    // delay: 1000,
                  //   time: {
                  //     displayFormat: "h:mm",
                  //   },
                  },
                  ticks: {
                    displayFormats: 2,
                    maxRotation: 0,
                    minRotation: 0,
                    stepSize: 1,
                    maxTicksLimit: 0,
                    minUnit: "second",
                    source: "auto",
                    autoSkip: false,
                    callback: function (value) {
                      return moment(value, "HH:mm:ss").format("HH:mm:ss");
                    },
                  },
                },
              ],
              yAxes: [
                {
                  
                  scaleLabel: {
                    display: true,
                    fontFamily: "Arial",
                    labelString: "Moment",
                    fontSize: 20,
                    fontColor: "#6c757d",
                  },
                  ticks: {
                    max: 100,
                    min:0,
                  },
                },
              ],
            },
          };

  return (
    <div>
        
      <header className="text-center relative top-4 text-black mx-[50px]">
        <div className="text-[16px] absolute ">
          Daily graph showing % of nutritions based on calories
        </div>
      </header>
      <Bar data={data} options={options}  />;
    </div>
  );
}
