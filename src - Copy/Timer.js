import React from 'react'
import { useState,useEffect } from 'react'
const Timer = () => {
const [counter,setCounter]=useState(0);
useEffect(()=>{
    console.log("start timer!")
   const timer=setInterval(()=>{
    setCounter(prev=>prev+1)
    },1000)
    return ()=>{
        clearInterval(timer)
        console.log("stop")
    }
},[])
  return (
    <div>
        Time Counter: {counter} seconds
    </div>
  )
}

export default Timer