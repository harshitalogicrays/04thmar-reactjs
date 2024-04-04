import React, { useState } from 'react'

const Statedemo = () => {
    // let count=1
    // let increaseCount=()=>{
    //     count++
    //     console.log(count)
    // }

    let [count,setCount]=useState('')
    let [a,setA]=useState(20)
    let [b,setB]=useState(10)
    let [result,setResult]=useState('')
    let increaseCount=()=>{
        // setCount(count+1)
        setCount((prev)=>parseInt(prev+1))
    }
  return (
   <>
    <button  type="button" className="btn btn-primary me-3" onClick={increaseCount} >counter  </button>
    <button  type="button" className="btn btn-primary me-2" onClick={()=>setCount(parseInt(count+5))} >increase by 5  </button>  
    <h1>{count}</h1>
    <br/>
    <button  type="button" className="btn btn-primary" onClick={()=>setResult(a+b)} > Addition  </button>  <br/>
    <h1>{result}</h1>
   </>
  )
}

export default Statedemo
