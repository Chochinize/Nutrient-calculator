import React from "react";
import { Bar } from "react-chartjs-2";






import moment from "moment";
var q1 = "This is question 1";
var q2 = "This is question 2";
var q3 = "This is question 3";
var q4 = "This is question 4";
var q5 = "This is question 5";
var questions = [q1, q2, q3, q4, q5];

const data = {
  datasets: [
    {
      label: ["%"],
    //   backgroundColor: "blue sky",
    //   lineTension: 0.4,
      color:'black',
      fill: true,
      borderJoinStyle: "mitter",
      borderDashOffset: 0.0,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#009688",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 4,
      pointRadius: 3,
      pointHitRadius: 10,
      borderWidth: 2,
      borderDash: [8, 4],
      showline: true,
      data: [],
    },
  ],
};


function LiveChart() {
//   console.log('message in chart', message)
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
            
              // plugins: {
              //   streaming: {
              //     frameRate: 5, // chart is drawn 5 times every second
              //   },
              // },
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
              
            //   scaleLabel: {
            //     display: true,
            //     fontFamily: "Arial",
            //     labelString: "Moment",
            //     fontSize: 20,
            //     fontColor: "#6c757d",
            //   },
              ticks: {
                max: 100,
                min:0,
              },
            },
          ],
        },
      };
      
  return (
    <div className="sm:w-[35rem]  border-b-2 border-gray">
        {/* <Doughnut data={...} /> */}
      <Bar data={data} options={options} className='min-h-full'/>
    </div>
  );
}

export default LiveChart;

// import React, { Component } from 'react';
// import { Line } from 'react-chartjs-2';
// import Chart from 'chart.js';

// const line = {
//     labels: [],
//     datasets: [
//        {
//           label: 'My First dataset',
//           fill: false,
//           data: []
//        }
//     ]
// };

// setInterval(function(){
//     line.labels.push(Math.floor(Math.random() * 100));
//     line.datasets[0].data.push(Math.floor(Math.random() * 100));
//     line.update();
// }, 5000);

// class LineChart extends Component {
//     render() {
//         return (
//             <div className="chart">
//                 <Line
//                     data={this.state}
//                     height={5}
//                     width={20}
//                 />
//             </div>          
//         )
//     }
// }

// export default LineChart;