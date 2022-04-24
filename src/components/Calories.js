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
    protein:[0],
    carbs: [0],
    fats:[0]
  }
  const [ result, setResult ] = useState(initialResult)


console.log(result.fats)
  
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
  


 

  const Send = async (p,c,f) => {

    const fil = cal.map((filteredProduct)=>
    Object.entries(filteredProduct.nutritions).filter(([key,val]) => key === product ) )
    
    console.log(fil.map((n)=> Object.fromEntries(n)))
    console.log(array)
    try {
      const res = await axios.post(
        "http://localhost:5050/u/daily",
        { product, gram },

      );
      
      setState((prevCheck) => !prevCheck);
      
      setArray(oldArray => [...oldArray, (Number(p.g)*fil.map((n)=> Object.fromEntries(n).Oats.protein)).toFixed()/100]);
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

          <div className="text-[20px] z-20 mt-8 border-2">
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
              <li>{array.reduce((previousValue, currentValue) => previousValue+ currentValue, 0).toFixed(1)}</li>
              <li>{result.fats}</li>
              <li>{result.carbs}</li>
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
