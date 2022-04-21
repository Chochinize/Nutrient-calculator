import React,{useState, useEffect} from "react";
import axios from "axios";
const CalCounter = () => {

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
    console.log("this is cal",cal );
  
    console.log(state);
 
    useEffect(() => {
        
          const fetchData = async () => {
            const res = await axios.get("http://localhost:5050/u/gProduct ");
            console.log('res',res)
            setCal(res.data.product);
          };

          fetchData();
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
            const res = await axios.get("http://localhost:5050/u/getDaily", {

            });
            setDaily(res);
          };
          fetchData();
        } catch (error) {
          return error;
        }
      }, [state]);


  return (
    <div className="grid grid-cols-2 h-full ">
      <div className="bg-blue-200 ">
        <select className="appearance-none 
      block
      
      
      py-1.5
      
      
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
        >
          <option defaultChecked>Choose product</option>
          <option>Rise</option>
          <option>Oats</option>
          <option>Chicken</option>
        </select>
        <label className="p-2">
          <input
            type="number"
            className=" p-2 outline-none "
            placeholder="place your grams"
            
          />
        </label>
        
      </div>
      <div className="bg-red-200">2</div>
    </div>
  );
};

export default CalCounter;
