import React, { useState } from "react";

const Counter=()=>{
    const [count, setCount] =useState(0)
    const [step, setStep]= useState(1);
    const handlerIncrement=()=>{
        setCount((c) => c + step);
    }
    const handlerDecrement=()=>{
        setCount((c)=> c - step);
    }
    const handlerStepIncrement=()=>{
        setStep((c) => c + 1);
    }
    const handlerStepDecrement=()=>{
        setStep((c)=> c - 1);
    }
    const d = new Date("Jan 2 2027");
    d.setDate(d.getDate() + count)

    //console.log(d.getDay + d.getDate)
    return(
        <>
        <div className="box-wrap">
            <button className="btn" onClick={handlerStepDecrement}>Decrement</button>
            Step:<strong>{step}</strong> 
            <button className="btn" onClick={handlerStepIncrement}>Increment</button>
        </div>
        <br/>
       <div className="box-wrap">
            <button className="btn" onClick={handlerDecrement}>Decrement</button>
            Count:<strong>{count}</strong> 
            <button className="btn" onClick={handlerIncrement}>Increment</button>
        </div> 
       <div>
        <span>{count === 0? "Today is ": count>0 ? `${count} days from today is `: `${count} days ago was `}</span> 
        <span>{d.toDateString()}</span>
       </div>
        </>
    )
} 

export default Counter 