import React,{useState, useEffect} from 'react';
import { Pie } from 'react-chartjs-2';
import useAuth from '../hooks/useAuth';



// export const data = {
//     labels: ['Protein', 'Carbohydrate', 'Fats', 'Calories'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [12, 19, 120, 100],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

export default function BarChart() {

    const data = {
        labels: ['Protein', 'Carbohydrate', 'Fats', 'Calories'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 120, 100],
            backgroundColor: [
              'rgba(25, 10, 242 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
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
      };
    

    
    const {dispatch, setAuthIsDone,authIsDone,auth , state } = useAuth();

    

    console.log('from bar ', state.dailies)
    useEffect(() => {

        // const car = state.dailies.carbs.reduce((prev,next)=>prev+next,0)
        // const fa = state.dailies.fats.reduce((prev,next)=>prev+next,0)

        setState({
            labels: ['Protein', 'Carbohydrate', 'Fats'],
        datasets:[{
    
            backgroundColor: [
                'rgba(22, 8, 163, 0.4)',
                'rgba(11, 222, 50, 0.7)',
                'rgba(215, 222, 13, 0.4)',
                
              ],
            borderColor: 'rgba(30,20,10,1)',
            borderWidth: 0.5,
            data:[120,140,120]
    
        }]
        })

    
    }, [state]);
    const [stateus,setState] = useState({

        labels: ['Protein', 'Carbohydrate', 'Fats'],
        datasets:[{
    
            backgroundColor: [
                'rgba(2, 8, 163, 0.4)',
                'rgba(11, 222, 50, 0.7)',
                'rgba(215, 222, 13, 0.4)',
                
              ],
            borderColor: 'rgba(30,20,10,1)',
            borderWidth: 0.5,
            data:[10,230,330,440]
    
        }]
    })

  return <>
   <Pie data={stateus} />
  </>
}
