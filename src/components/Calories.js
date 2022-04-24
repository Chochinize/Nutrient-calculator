import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderType from "./ThemeHeader/HeaderType";


const Calories = () => {
  const [cal, setCal] = useState([]);
  const [gram, setGram] = useState({ gram: 0 });
  const [product, setProduct] = useState("");
  const [daily, setDaily] = useState([]);
  const [state, setState] = useState(false);

  const [demo, setDemo] = useState([]);
  
  const [array,setArray] = useState([]);
  
  const initialResult = {
    protein:[],
    carbs: [0],
    fats:[0]
  }
  const [ result, setResult ] = useState(initialResult)

  // const [ result, setResult ] = useState({
  //   protein:[0],
  //   carbs: [0],
  //   fats:[0]
  // })
  // setResult(prevState=>({...prevState,protein:3}))
  // console.log(result.protein)

console.log('res.protein:',result.protein[0])

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get("http://localhost:5050/u/gProduct");
        setCal(res.data.product);
      };
      fetchData();
    } catch (error) {
      return error;
    }
  }, []);

  const onChangeHandler = (e) => {
    setGram({ gram: e.target.value });
  };
  const selectHandler = (e) => {
    setProduct(e.target.value);
  };

  console.log(result)
  


 

  const Send = async (nutri,c,f) => {

    const fil = cal.map((filteredProduct)=>Object.entries(filteredProduct.nutritions).filter(([key,val]) => key === product ) )
    
    // console.log(fil.map((n)=> Object.fromEntries(n)))
    // console.log(array)
    console.log(nutri.g)
    try {
      const res = await axios.post(
        "http://localhost:5050/u/daily",
        { product, gram },

      );
      switch (product) {
        case 'Oats':
          setResult(prevState=>({protein:[...prevState.protein,(Number(nutri.g)*fil.map((m)=>Object.fromEntries(m).Oats.protein)).toFixed()/100],carbs:[...prevState.carbs,Number((nutri.g)*fil.map((c)=>Object.fromEntries(c).Oats.carbs)).toFixed()/100],fats:[...prevState.fats,Number((nutri.g)*fil.map((c)=>Object.fromEntries(c).Oats.fats)).toFixed()/100]}))
          break;
        case 'Rise':
          setResult(prevState=>({protein:[...prevState.protein,(Number(nutri.g)*fil.map((m)=>Object.fromEntries(m).Rise.protein)).toFixed()/100],carbs:[...prevState.carbs,Number((nutri.g)*fil.map((c)=>Object.fromEntries(c).Rise.carbs)).toFixed()/100],fats:[...prevState.fats,Number((nutri.g)*fil.map((c)=>Object.fromEntries(c).Rise.fats)).toFixed()/100]}))
        case 'Meal':
          setResult(prevState=>({protein:[...prevState.protein,(Number(nutri.g)*fil.map((m)=>Object.fromEntries(m).Meal.protein)).toFixed()/100],carbs:[...prevState.carbs,Number((nutri.g)*fil.map((c)=>Object.fromEntries(c).Meal.carbs)).toFixed()/100],fats:[...prevState.fats,Number((nutri.g)*fil.map((c)=>Object.fromEntries(c).Meal.fats)).toFixed()/100]}))
          // expected output: "Mangoes and papayas are $2.79 a pound."
          break;
        default:
          console.log(`Sorry, we are out of ${product}.`);
      }
    
      setState((prevCheck) => !prevCheck);
      // setResult(prevState=>({protein:[...prevState.protein,(Number(nutri.g)*fil.map((m)=>Object.fromEntries(m).Oats.protein)).toFixed()/100],carbs:[...prevState.carbs,Number((nutri.g)*fil.map((c)=>Object.fromEntries(c).Oats.carbs)).toFixed()/100],fats:[...prevState.fats,Number((nutri.g)*fil.map((c)=>Object.fromEntries(c).Oats.fats)).toFixed()/100]}))
      // setArray(oldArray => [...oldArray, (Number(nutri.g)*fil.map((n)=> Object.fromEntries(n).Oats.protein)).toFixed()/100]);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get("http://localhost:5050/u/getDaily");
        setDaily(res.data.message);
      };
      fetchData();
    } catch (error) {
      return error;
    }
  }, [state]);

  return (
    
    <div className="xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 font-dongle ">

      
      <div className=" m-2 p-2">
       <div className="grid">
        <div className="flex flex-row gap-y-4">

          
    
          <select
         
          className="h-5 text-[16px] w-full text-center focus:outline-none  "
            aria-label="Default select example"
            onChange={selectHandler}
          >
            <option defaultChecked >Choose</option>
            <option>Rise</option>
            <option>Oats</option>
            <option>Meal</option>
          </select>
          <input
            
            type="number"
            className="w-[50px] h-5 text-[16px] focus:outline-none text-center "
            placeholder="grams"
            onChange={onChangeHandler}
            />
            </div>

          <div className="text-[14px] text-right  h-7">(different between 1 - 2 % is availablae)</div>
          <div className="text-[20px] z-20  border-2">
            <div className="flex justify-between border-b-[1px] border-blue-800 ">
              <div className="">protein</div>
              {product === "Chicken" ? (
                <div>
                  {cal.map((calorie, i) => {
                    return (
                      <div key={i}>
                        {((calorie.nutritions.Meal.protein * gram.gram) / 100).toFixed(1)}<span className="text-[0.6rem] ">/100g</span>
                      </div>
                    );
                  })}
                </div>
              ) : product === "Rise" ? (
                <div>
                  {cal.map((calorie, i) => {
                    return (
                      <div key={i}>
                        {((calorie.nutritions.Rise.protein * gram.gram) / 100).toFixed(1)}<span className="text-[0.6rem] ">/100g</span>
                      </div>
                    );
                  })}
                </div>
              ) : product === "Oats" ? (
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
              <div>carbs</div>
              {product === "Chicken" ? (
                <div>
                  {cal.map((calorie, i) => {
                    return (
                      <div key={i}>
                        {((calorie.nutritions.Meal.carbs * gram.gram) / 100).toFixed(1)}<span className="text-[0.6rem]">/100g</span>
                      </div>
                    );
                  })}
                </div>
              ) : product === "Rise" ? (
                <div>
                  {cal.map((calorie, i) => {
                    return (
                      <div key={i}>
                        {((calorie.nutritions.Rise.carbs * gram.gram) / 100).toFixed(1)}<span className="text-[0.6rem]">/100g</span>
                      </div>
                    );
                  })}
                </div>
              ) : product === "Oats" ? (
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
              <div>fats</div>
              {product === "Chicken" ? (
                <div>
                  {cal.map((calorie, i) => {
                    return (
                      <div key={i}>
                        {((calorie.nutritions.Meal.fats * gram.gram) / 100).toFixed(1)}<span className="text-[0.6rem]">/100g</span>
                      </div>
                    );
                  })}
                </div>
              ) : product === "Rise" ? (
                <div>
                  {cal.map((calorie, i) => {
                    return (
                      <div key={i}>
                        {((calorie.nutritions.Rise.fats * gram.gram) / 100).toFixed(1)}<span className="text-[0.6rem]">/100g</span>
                      </div>
                    );
                  })}
                </div>
              ) : product === "Oats" ? (
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
              
              <div>Calories</div>
              <div>calories</div>
            </div>
          </div>
          {product && <button onClick={()=>Send(({g:gram.gram}))} className='border-[1px] w-max m-auto  rounded-md  text-[15px] mt-6 px-4'>add</button>}
        </div>
      </div>

      <div className="border-2 md:text-[1.5vw] sm:text-[18px] top-5  xs:text-[18px] relative  h-max">
        <h1 className="">Today nutritions</h1>
        <ul className="px-2  relative right-4 m-2 top-2 text-right"> 
              {/* <li>{array.reduce((previousValue, currentValue) => previousValue+ currentValue, 0).toFixed(1)}</li> */}
              <li>{result.protein.reduce((prev,next)=>prev+next,0).toFixed()}</li>
              <li>{result.carbs.reduce((prev,next)=>prev+next,0).toFixed()}</li>
              <li>{result.fats.reduce((prev,next)=>prev+next,0).toFixed()}</li>
              <li>calories</li>
              
        </ul>
        {/* {daily.map((dailyMeal, i) => {
          return (
            <div key={i} className=''>
          <div>
                {dailyMeal.product}
            </div>
              {dailyMeal.gram}
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Calories;
