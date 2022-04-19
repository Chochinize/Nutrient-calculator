import React,{useEffect,useState} from 'react'
import axios from 'axios'
const Calories = () => {
  
    const [cal,setCal] = useState([]);
    const [gram, setGram ] = useState({gram:0});
    const [ product , setProduct] = useState('');
    const [ daily , setDaily ] = useState([])
    const [state, setState ] = useState(false)

    const [demo , setDemo ] =useState([])
    console.log(demo)
    console.log('this is daily',daily)

  console.log(state)
    
    useEffect(() => {
        try {
          const fetchData = async () => {
            const res = await axios.get("http://localhost:5050/u/gProduct",{withCredentials:true});
            setCal(res.data.product);
          };
          fetchData();
        } catch (error) {
            return error
        }
      }, []);

      const onChangeHandler = (e)=>{
        setGram({gram:e.target.value})
        
      }
      const selectHandler = (e)=>{
        setProduct(e.target.value)
       
      }
const Send=async ()=>{
  try {
      const res = await axios.post("http://localhost:5050/u/daily",{product,gram},{withCredentials:true})
      setState(prevCheck => !prevCheck);
      setDemo({demo:'dd'})
      
  } catch (error) {
      return error
  }
}

useEffect(() => {
  try {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5050/u/getDaily",{withCredentials:true});
      setDaily(res.data.message)
    };
    fetchData();
  } catch (error) {
      return error
  }
}, []);

    return (

      
<div className="grid grid-cols-2  relative border-2 border-black gap-4  place-items-center h-screen ">
 
  <div className="justify-self-center  ">
  <div className="flex justify-between">
    <select className="form-select appearance-none
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onChange={selectHandler}  >

        <option defaultChecked>Choose product</option>
        <option >Rise</option>
        <option >Oats</option>
        <option >Chicken</option>
    </select>
    <input type='number' className=' focus:outline-2' onChange={onChangeHandler} />
    <div className='flex flex-col '> 
    <div className='p-4 flex justify-between w-48'>
    <div>protein</div>
      {product === 'Chicken'?  <div>{cal.map((calorie,i)=>{
        return ( 
          <div key={i}>{calorie.nutritions.Meal.protein * gram.gram / 100}</div>
        )
      })}</div> : product === 'Rise'? <div>{cal.map((calorie,i)=>{
        return ( 
          <div key={i}>{calorie.nutritions.Rise.protein * gram.gram / 100}</div>
        )
      })}</div> : product === "Oats" ? <div>{cal.map((calorie,i)=>{
        return ( 
          <div key={i}>{calorie.nutritions.Oats.protein * gram.gram / 100}</div>
        )
      })}</div> :'' }
    </div>


    <div className='p-4 flex justify-between w-48'>
    <div>carbs</div>
      {product === 'Chicken'?  <div>{cal.map((calorie,i)=>{
        return ( 
          <div key={i}>{calorie.nutritions.Meal.carbs * gram.gram / 100}</div>
        )
      })}</div> : product === 'Rise'? <div>{cal.map((calorie,i)=>{
        return ( 
          <div key={i}>{calorie.nutritions.Rise.carbs * gram.gram / 100}</div>
        )
      })}</div> : product === "Oats" ? <div>{cal.map((calorie,i)=>{
        return ( 
          <div key={i}>{calorie.nutritions.Oats.carbs * gram.gram /100}</div>
        )
      })}</div> :'' }
    </div>
    <div className='p-4 flex justify-between w-48'>
    <div>fats</div>
      {product === 'Chicken'?  <div>{cal.map((calorie,i)=>{
        return ( 
          <div key={i}>{calorie.nutritions.Meal.fats * gram.gram /100}</div>
        )
      })}</div> : product === 'Rise'? <div>{cal.map((calorie,i)=>{
        return ( 
          <div key={i}>{calorie.nutritions.Rise.fats * gram.gram /100 }</div>
        )
      })}</div> : product === "Oats" ? <div>{cal.map((calorie,i)=>{
        return ( 
          <div key={i}>{calorie.nutritions.Oats.fats * gram.gram / 100}</div>
        )
      })}</div> :'' }
    </div>
    
   
    
    </div>
  {product && <button onClick={Send}>ADD</button>}
  </div>
{demo.prot}
</div>
  

  <div className='border-2 border-black   '>{daily.map((dailyMeal,i)=>{
    return (
      <div key={i}>
        {dailyMeal.product}
        {dailyMeal.gram}

      </div>
    )
  })}</div>
</div>
  )
}

export default Calories