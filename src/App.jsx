
import './App.css';
import {useState} from "react"
import {evaluate} from "mathjs"
import keys from "./keys.json"
const App = ( )=>{
  const [total, setTotal] = useState([0])
  const [sumtotal, setsumTotal] = useState([0])
  const [error, setError] = useState(false)
  

  const handleClick = (val) =>{
    setsumTotal([0])
    try {
      if (val === undefined){
        throw new Error("value not defined ")
      }
    
      
      else if (val === "clear") {
        setTotal([0]);
      } else if (val === "=") {
        let currentStr = total.join("");
        let newTotal = evaluate(currentStr);
        console.log(newTotal)
        setsumTotal(newTotal)
        setTotal([0]);
        
      } else {
        let newTotal = [...total, val];
        if (total[0] === 0) {
          newTotal.shift();
        }
        setTotal(newTotal);
        console.log(newTotal)
      }
    

      }
      catch (error) {
    
        console.log(error);
        setError(true)
    }
  }

  if (error){
    return(
      <div>
        <h1>We Encountered errror</h1>
      </div>
    )
  }
  return (
    <div className="container">
      <h1>react -calculator</h1>
      <Display value={total} display={sumtotal}/>
      <div className="keys">
      {keys.map((item,index)=>{
        return(
          
          <Key 
            key={index} 
            value ={item.value} 
            handleClick={handleClick}
            displayValue={item.displayValue}
            style={item.style}
            
            
            />  
           

        )
      })}
      </div>
    </div>
  )
}


const Display =(props) => {
  return (
  <h3 className="display" >{props.display>0 ? props.display : props.value}</h3>)
};

const Key =({value, handleClick, displayValue,style}) =>{
  return (
    
         <button className={`button ${style}`} onClick={()=>handleClick(value)}> {displayValue}</button>
    )

};
export default App;
