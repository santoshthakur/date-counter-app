import React, { useState } from "react";

export const DateCounter=()=>{
    const [valueInput, setValueInput]= useState(0);
    const [currentRange, setCurrentRange] = useState(1)
    const handlerValue= (e)=>{
        setValueInput(Number(e.target.value))  
    }
    const handlerDEcrement= ()=>{
        setValueInput((prev)=> prev - currentRange)
    }
    const handlerINcrement= ()=>{
        setValueInput((prev)=> prev + currentRange)
    }
    const handleChange =(e)=>{
        setCurrentRange(Number(e.target.value))
    }
    const handlerReset=()=>{
        setValueInput(0);
        setCurrentRange(0)
    }
    const now= new Date("04 jan 2025")
    now.setDate(now.getDate() + valueInput)
   // const today= now.setDate()
    return(
        <>
        <div>
        <h1>Range Section</h1>
            <div>
                <input type="range" value={currentRange} onChange={handleChange} min={1} max={10} /> {currentRange}
            </div>
            <button className="btn" onClick={handlerDEcrement}>Decrement</button>
            <input type="number" placeholder="Enter Number" value={valueInput} onChange={handlerValue} />
            <button className="btn" onClick={handlerINcrement}>Increment</button>
            <div>
                <spa>
                    {valueInput === 0 ? "Today " : valueInput> 0 ? `${valueInput} days from today is `: `${valueInput} days ago was `} 
                </spa>
                {now.toDateString()}
            </div>
            {valueInput !== 0 || currentRange !== 1 ? (  <div>
                <button style={{marginTop:'40px', padding:'10px'}} onClick={handlerReset}>Reset</button>
            </div>): null }
          
        </div>
        </>
    )
}