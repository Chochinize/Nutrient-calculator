import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderType from "./ThemeHeader/HeaderType";
import useAuth from "./hooks/useAuth";
import { useParams } from "react-router-dom";
import DropDownProduct from './HeadlessUI/DropDownProduct'


const Calories = () => {
  console.log('process',process.env.PUBLIC_URL+'/rise.PNG')
  const {dispatch, setAuthIsDone,authIsDone,auth ,state} = useAuth();
  const [cal, setCal] = useState([]);
  const [gram, setGram] = useState({ gram: 0 });
  const [product, setProduct] = useState("");
  const [daily, setDaily] = useState([]);
  const [state1, setState] = useState(false);

  const [demo, setDemo] = useState([]);
  
  const [array,setArray] = useState([]);
  
  const id = useParams()

  const [effect, setEffect] = useState(false);
  const initialResult = {
    protein:[0],
    carbs: [0],
    fats:[0],
    cc:[0]
  }
  const [ result, setResult ] = useState(initialResult)



console.log('product',cal)
 
  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get(`/u`);
        setCal(res.data.product);
      };
      fetchData();
    } catch (error) {
      return error;
    }
  }, []);

  const onChangeHandler = (e) => {
    setGram({ gram: e.target.value });
    setState(false)
    setColor({green:'green',showed:true, text:'red-400'})
    

  };
  const selectHandler = (e) => {
    setProduct(e.target.value);
  };


const Protein = result.cc.reduce((prev,next)=>prev+next,0).toFixed(1)/10
  

  console.log('dispatching result',result)
const saveDaily = async()=>{
  setColor({green:'white'})
  try {
    const res = await axios.post(
      `/u/${id.id}`,
      { result },
      dispatch({ type: 'DAILIES', payload: result})
      );
      
  } catch (error) {
    console.log(error)
  }
}
const counterFunction = () => {
  let counter = 0;
  return () => {
    counter ++;
    return counter;
  }
}
const incrementer = counterFunction();
incrementer()
 const [ color, setColor ] = useState({
   green:'green',
   active:false,
   showed:false,
   text:'white',
  })
  useEffect(()=>{
    try {
      const fetchData = async () => {
        const res = await axios.get(`/u/${id.id}`);

      };
      fetchData();
    } catch (error) {
      return error;
    }
  },[])
  const Send = async (nutri,c,f) => {
    const fil = cal.map((filteredProduct)=>Object.entries(filteredProduct.nutritions).filter(([key,val]) => key === state.nutrients ) )
    setEffect(true)
    // console.log(fil.map((n)=> Object.fromEntries(n)))
    console.log('fil calc',fil)
  
    setColor({green:'green',showed:true,text:'red-400'})
    try {
   
      
      switch (state.nutrients) {
        case 'Oats':

        console.log('first')
          setResult(prevState=>({
            protein:[...prevState.protein,(Number(nutri.g)*fil.map((m)=>Object.fromEntries(m).Oats.protein)).toFixed()/100],
            carbs:[...prevState.carbs,Number((nutri.g)*fil.map((c)=>Object.fromEntries(c).Oats.carbs)).toFixed()/100],
            fats:[...prevState.fats,Number((nutri.g)*fil.map((c)=>Object.fromEntries(c).Oats.fats)).toFixed()/100],
            cc:[...prevState.cc,Number((nutri.g)*fil.map((c)=>Object.fromEntries(c).Oats.cc)).toFixed()/100],

          }))
          break;
        case 'Rise':
          setResult(prevState=>({
            protein:[...prevState.protein,(Number(nutri.g)*fil.map((m)=>Object.fromEntries(m).Rise.protein)).toFixed()/100],
            carbs:[...prevState.carbs,Number((nutri.g)*fil.map((c)=>Object.fromEntries(c).Rise.carbs)).toFixed()/100],
            fats:[...prevState.fats,Number((nutri.g)*fil.map((c)=>Object.fromEntries(c).Rise.fats)).toFixed()/100],
            cc:[...prevState.cc,Number((nutri.g)*fil.map((c)=>Object.fromEntries(c).Rise.cc)).toFixed()/100],
          }))
          break;
        case "Meal":
          setResult(prevState=>({
          protein:[...prevState.protein,(Number(nutri.g)*fil.map((m)=>Object.fromEntries(m).Meal.protein)).toFixed()/100],
          carbs:[...prevState.carbs,Number((nutri.g)*fil.map((c)=>Object.fromEntries(c).Meal.carbs)).toFixed()/100],
          fats:[...prevState.fats,Number((nutri.g)*fil.map((c)=>Object.fromEntries(c).Meal.fats)).toFixed()/100],
          cc:[...prevState.cc,Number((nutri.g)*fil.map((c)=>Object.fromEntries(c).Meal.cc)).toFixed()/100]}))
          // expected output: "Mangoes and papayas are $2.79 a pound."
          break;
        default:
          console.log(`Sorry, we are out of ${product}.`);
      }
    
      setState((prevCheck) => true);
      // setResult(prevState=>({protein:[...prevState.protein,(Number(nutri.g)*fil.map((m)=>Object.fromEntries(m).Oats.protein)).toFixed()/100],carbs:[...prevState.carbs,Number((nutri.g)*fil.map((c)=>Object.fromEntries(c).Oats.carbs)).toFixed()/100],fats:[...prevState.fats,Number((nutri.g)*fil.map((c)=>Object.fromEntries(c).Oats.fats)).toFixed()/100]}))
      // setArray(oldArray => [...oldArray, (Number(nutri.g)*fil.map((n)=> Object.fromEntries(n).Oats.protein)).toFixed()/100]);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get("/u/getDaily");
        setDaily(res.data.message);
        
      };
      fetchData();
    } catch (error) {
      return error;
    }
  }, [state1]);

  return (
    
    <div className="xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 font-dongle ">

      
      <div className=" m-2  ">
       <div className="grid ">
       <div className="w-11 h-11 border-2 justify-self-start  ml-2 rounded-full absolute top-6">
         
       </div>

        <div className="flex flex-row   relative top-[14px] w-48 xs:w-36 sm:w-36 justify-self-end gap-y-4">
          <DropDownProduct/>

          
    
          {/* <select
         
          className="h-5 text-[16px]  w-[8vw] xs:w-[12vw] text-center  focus:outline-none  "
            aria-label="Default select example"
            onChange={selectHandler}
          >
            <option defaultChecked >Choose</option>
            <option>Rise</option>
            <option>Oats</option>
            <option>Meal</option>
          </select> */}
          

          
          
          <input
            
            type="text"
            className="w-[80px] mx-2 my-2 h-7 text-[16px] rounded-md  focus:outline-none text-center "
            placeholder="grams"
            onChange={onChangeHandler}
            />
            </div>
        
          <div className="text-[0.8vw] text-right mt-4 xs:invisible h-7">(different between 1 - 2 ~% is available)</div>
          <div className="text-[20px] z-10  ">
            <div className="flex justify-between border-b-[1px] border-blue-800 ">
              <div className="ml-4 xs:ml-2">protein</div>
              {state.nutrients === "Meal" ? (
                <div>
                  {cal.map((calorie, i) => {
                    return (
                      <div key={i}>
                        {((calorie.nutritions.Meal.protein * gram.gram) / 100).toFixed(1)}<span className="text-[0.6rem] ">/100g</span>
                      </div>
                    );
                  })}
                </div>
              ) : state.nutrients === "Rise" ? (
                <div>
                  {cal.map((calorie, i) => {
                    return (
                      <div key={i}>
                        {((calorie.nutritions.Rise.protein * gram.gram) / 100).toFixed(1)}<span className="text-[0.6rem] ">/100g</span>
                      </div>
                    );
                  })}
                </div>
              ) :  state.nutrients === "Oats" ? (
                <div>
                  {cal.map((calorie, i) => {
                    return (
                      <div key={i}>
                        {((calorie.nutritions.Oats.protein * gram.gram) / 100).toFixed(1)}<span className="text-[0.6rem]">/100g</span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="flex  justify-between border-b-[1px] border-blue-800">
              <div className="ml-4 xs:ml-2" >carbs</div>
              { state.nutrients === "Meal" ? (
                <div>
                  {cal.map((calorie, i) => {
                    return (
                      <div key={i}>
                        {((calorie.nutritions.Meal.carbs * gram.gram) / 100).toFixed(1)}<span className="text-[0.6rem]">/100g</span>
                      </div>
                    );
                  })}
                </div>
              ) :  state.nutrients === "Rise" ? (
                <div>
                  {cal.map((calorie, i) => {
                    return (
                      <div key={i}>
                        {((calorie.nutritions.Rise.carbs * gram.gram) / 100).toFixed(1)}<span className="text-[0.6rem]">/100g</span>
                      </div>
                    );
                  })}
                </div>
              ) :  state.nutrients === "Oats" ? (
                <div>
                  {cal.map((calorie, i) => {
                    return (
                      <div key={i}>
                        {((calorie.nutritions.Oats.carbs * gram.gram) / 100).toFixed(1)}<span className="text-[0.6rem]">/100g</span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-between border-b-[1px] border-blue-800">
              <div className="ml-4 xs:ml-2">fats</div>
              { state.nutrients === "Meal" ? (
                <div>
                  {cal.map((calorie, i) => {
                    return (
                      <div key={i}>
                        {((calorie.nutritions.Meal.fats * gram.gram) / 100).toFixed(1)}<span className="text-[0.6rem]">/100g</span>
                      </div>
                    );
                  })}
                </div>
              ) :  state.nutrients === "Rise" ? (
                <div>
                  {cal.map((calorie, i) => {
                    return (
                      <div key={i}>
                        {((calorie.nutritions.Rise.fats * gram.gram) / 100).toFixed(1)}<span className="text-[0.6rem]">/100g</span>
                      </div>
                    );
                  })}
                </div>
              ) :  state.nutrients === "Oats" ? (
                <div>
                  {cal.map((calorie, i) => {
                    return (
                      <div key={i}>
                        {((calorie.nutritions.Oats.fats * gram.gram) / 100).toFixed(1)}<span className="text-[0.6rem]">/100g</span>
                       
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-between border-b-[1px] border-blue-800">
              
              <div className="ml-4 xs:ml-2">Calories</div>
              <div>            { state.nutrients === "Meal" ? (
                <div>
                  {cal.map((calorie, i) => {
                    return (
                      <div key={i}>
                        {((calorie.nutritions.Meal.cc * gram.gram) / 10).toFixed(1)}<span className="text-[0.6rem]">/100g</span>
                      </div>
                    );
                  })}
                </div>
              ) :  state.nutrients === "Rise" ? (
                <div>
                  {cal.map((calorie, i) => {
                    return (
                      <div key={i}>
                        {((calorie.nutritions.Rise.cc * gram.gram) / 10).toFixed(1)}<span className="text-[0.6rem]">/100g</span>
                      </div>
                    );
                  })}
                </div>
              ) :  state.nutrients === "Oats" ? (
                <div>
                  {cal.map((calorie, i) => {
                    return (
                      <div key={i}>
                        {((calorie.nutritions.Oats.cc * gram.gram) / 10).toFixed(1)}<span className="text-[0.6rem]">/100g</span>
                       
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}</div>
            </div>
          </div>
          <div className=" m-2 text-center">

          { state.nutrients !== null ?     <button
              type="submit"
              value="Submit"
              className={` ${effect && 'animate-wiggle'}  text-white  bg-indigo-600 text-[22px] shadow-xl rounded-md    font-bold w-24 hover:bg-indigo-400 `}
              onClick={()=>Send(({g:gram.gram,}))}
              onAnimationEnd={()=>setEffect(false)}
              >
              Add
            </button> : ''}
          </div>
        </div>
      </div>
      {/* <button onClick={()=>Send(({g:gram.gram,}))} onAnimationEnd={()=>setEffect(false)} className={` ${effect && 'animate wiggle'} text-white  bg-yellow-400  shadow-xl rounded-md  px-6 py-2  font-bold w-full hover:bg-yellow-500`}>add</button> */}


      <div className=" md:text-[1.5vw] sm:text-[18px] top-6  xs:text-[18px] relative  h-max">
        
        <h1 className="">Today nutritions</h1>
       {state1 ?
        <ul className="px-2  relative right-4 m-2 top-2 text-right text-black"> 
              {/* <li>{array.reduce((previousValue, currentValue) => previousValue+ currentValue, 0).toFixed(1)}</li> */}
              <li>{result.protein.reduce((prev,next)=>prev+next,0).toFixed(1)} </li>
              <li>{result.carbs.reduce((prev,next)=>prev+next,0).toFixed(1)}</li>
              <li>{result.fats.reduce((prev,next)=>prev+next,0).toFixed(1)}</li>
              <li>{result.cc.reduce((prev,next)=>prev+next,0).toFixed(1)*10}</li>
              
              
        </ul> :   <ul className="px-2  relative right-4 m-2 top-2 text-right text-red-400"> 
              {/* <li>{array.reduce((previousValue, currentValue) => previousValue+ currentValue, 0).toFixed(1)}</li> */}
              <li>{result.protein.reduce((prev,next)=>prev+next,0).toFixed(1)} </li>
              <li>{result.carbs.reduce((prev,next)=>prev+next,0).toFixed(1)}</li>
              <li>{result.fats.reduce((prev,next)=>prev+next,0).toFixed(1)}</li>
              <li>{result.cc.reduce((prev,next)=>prev+next,0).toFixed(1)*10}</li>
              
              
        </ul>
       }
        <div className=" text-center m-10 ">

{state1 ? <button onClick={()=>saveDaily()}  className={`border-[1px] w-max m-auto  border-${color.green}-400 text-${color.text} rounded-md  text-[15px]  px-4`}>Save your daily nutrition</button> :
         color.active ? <button onClick={()=>saveDaily()}  className={` border-[1px]    w-max m-auto  rounded-md  text-[15px]  px-4 ` }>Save your daily nutrition</button> : 
         color.showed ? <button onClick={()=>saveDaily()}  disabled  className='border-[1px] border-red-400  w-max m-auto  rounded-md  text-[15px]  px-4'>Save your daily nutrition</button> : ''} 
</div>
        {/* {daily.map((ix)=>ix.dailyNutritions.protein.reduce((p,n)=>p+n,0))} */}
      </div>
      
    </div>
  );
};

export default Calories;
