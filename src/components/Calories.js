import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderType from "./ThemeHeader/HeaderType";


const Calories = () => {
  const [cal, setCal] = useState([]);
  const [gram, setGram] = useState({ gram: 0 });
  const [product, setProduct] = useState("");
  const [daily, setDaily] = useState([]);
  const [state, setState] = useState(false);

  const [demo, setDemo] = useState({
    prot: "",
    main: "",
  });
  console.log(demo);
  console.log("this is daily", daily);

  console.log(state);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get("http://localhost:5050/u/gProduct", {
          withCredentials: true,
        });
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
  const Send = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5050/u/daily",
        { product, gram },
        { withCredentials: true }
      );
      setState((prevCheck) => !prevCheck);
      setDemo({ demo: "dd" });
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get("http://localhost:5050/u/getDaily", {
          withCredentials: true,
        });
        setDaily(res.data.message);
      };
      fetchData();
    } catch (error) {
      return error;
    }
  }, [state]);

  return (
    <div className="grid grid-cols-3 fixed border-2 border-black gap-4  place-items-center h-screen w-full ">
      <div className="justify-self-center ">
      <div className="relative bottom-80   border-2 border-black">
        <div className="flex">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
        <div className="grid ">
     
          <select
            className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
            onChange={selectHandler}
          >
            <option defaultChecked >Choose product</option>
            <option>Rise</option>
            <option>Oats</option>
            <option>Chicken</option>
          </select>
          <label className="p-2">

          <input
            
            type="number"
            className=" p-2 outline-none "
            placeholder="place your grams"
            onChange={onChangeHandler}
            />
            </label>
          <div className="flex flex-col font-mono ">
            <div className="p-2 flex justify-between w-48">
              <div>protein</div>
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

            <div className="p-2 flex justify-between w-48">
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
            <div className="p-2 flex justify-between w-48">
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
            <div className="p-2 flex justify-between w-48">
              <div>Calories</div>
              <div>calories</div>
            </div>
          </div>
          {product && <button onClick={Send}>ADD</button>}
        </div>
      </div>

      <div className="border-2 border-black   ">
        {daily.map((dailyMeal, i) => {
          return (
            <div key={i}>
              {dailyMeal.product}
              {dailyMeal.gram}
            </div>
          );
        })}
      </div>

      <div class="grid grid-rows-4  grid-flow-col gap-4 w-full h-full p-4   ">


        <div class="row-start-1 row-span-2 border-2 border-black  h-full bg-red-200    ">
          <div class="flex justify-center bg-yellow-200 shrink ">
           
          <img
          className="inline-block h-20 w-20 mt-2 mb-2  rounded-full ring-2 ring-white "
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          />    
      
          </div>
          <div> </div>
     
        </div>


        <div class="row-start-2 row-span-2 border-2  border-black">02</div>
        <div class="col-start-2 col-span-3 border-2 w-full h-full border-black">
          <div className="flex justify-center w-full h-full items-center">
            <div className=""></div>
           
          </div>
        </div>
        <div class="col-start-2 col-span-2 border-2 border-black">04</div>
        <div class="row-start-3 col-start-1 col-span-3  border-2 border-black">
          05
        </div>
        <div class="row-start-4 col-start-1 col-span-2 border-2 border-black">
          06
        </div>
        <div class="row-start-4 col-start-3 col-span-2 border-2 border-black">
          07
        </div>
      </div>
    </div>
  );
};

export default Calories;
