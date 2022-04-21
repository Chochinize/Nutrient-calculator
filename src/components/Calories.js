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
  console.log(cal);

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
  const Send = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5050/u/daily",
        { product, gram },

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
        const res = await axios.get("http://localhost:5050/u/getDaily");
        setDaily(res.data.message);
      };
      fetchData();
    } catch (error) {
      return error;
    }
  }, [state]);

  return (
    
    <div className="grid grid-cols-2    ">

      
      <div className=" border-2 border-black ">
       <div className="grid ">
        <div className="flex flex-col gap-2">

          <select
            className="text-center"
            aria-label="Default select example"
            onChange={selectHandler}
          >
            <option defaultChecked >Choose product</option>
            <option className="hover:bg-black">Rise</option>
            <option>Oats</option>
            <option>Chicken</option>
          </select>
          
    
          <input
            
            type="number"
            className="w-full"
            placeholder="place your grams"
            onChange={onChangeHandler}
            />
            </div>

          <div className="text-xs">
            <div className="flex justify-between">
              <div className="font-bold ">protein</div>
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

            <div className="flex  justify-between">
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
            <div className="flex justify-between">
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
            <div className="flex justify-between">
              <div>Calories</div>
              <div>calories</div>
            </div>
          </div>
          {product && <button onClick={Send}>ADD</button>}
        </div>
      </div>

      <div className="border-2 border-black    ">
        {daily.map((dailyMeal, i) => {
          return (
            <div key={i}>
              {dailyMeal.product}
              {dailyMeal.gram}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calories;
