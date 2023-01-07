import { useState } from "react"

export const useCounter = (InitialValue = 10) =>{

     const [counter, setCounter] = useState(InitialValue)

     const incremen =(value = 5)=>{
        setCounter(counter + value)
     } 
     const reset =()=>{
        setCounter(InitialValue)
     } 
     const decrement =(value = 5)=>{
      if (counter === 0 ) return;
        setCounter(counter - value)
     } 


    return{
        counter,
        incremen,
        reset,
        decrement,

    }
}