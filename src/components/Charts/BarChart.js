import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut } from "react-chartjs-2";
import useAuth from "../hooks/useAuth";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels, Title);

console.log(ChartDataLabels);
export default function BarChart() {
  const { state } = useAuth();
  console.log("state from Bar", state.dailies.protein);
  const [stateus, setState] = useState({
    labels: ["Protein", "Carbohydrate", "Fats"],
    datasets: [
      {
        data: [0, 0, 0],
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
    layout: {
      padding: {
        top: 0,
        bottom: 200,
      },
    },

    plugins: {
      title: {
        display: true,
        fontSize: 30,
        position: "top",
        text: "                                                                                                       nutritions",
        padding: {
          top: 80,
        },
      },
      datalabels: {
        align: "middle",

        color: "black",
        font: {
          weight: "bold",
        },
      },
      legend: {
        display: true,
        position: "right",
        align: "center",
      },
      animation: {
        animateScale: true,
      },
    },
  };

  useEffect(() => {
    setState({
      labels: ["Protein", "Carbohydrate", "Fats"],
      datasets: [
        {
          backgroundColor: [
            "rgba(255, 99, 132)",
            "rgba(54, 162, 235 )",
            "rgba(255, 206, 86)",
          ],
          label: " Increase Rate",
          borderColor: "rgba(30,20,10,1)",
          borderWidth: 0.5,
          data: [
            Math.ceil(
              state.dailies.protein.reduce((prev, next) => prev + next, 0)
            ),
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

  return (
    <div>
        
      <header className="text-center relative top-4 text-black mx-[50px]">
        <div className="text-[16px] absolute ">
          Daily graph showing % of nutritions based on calories
        </div>
      </header>
      <Doughnut data={stateus} options={options} />;
    </div>
  );
}
