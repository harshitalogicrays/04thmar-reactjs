import React, { useState } from 'react'
import ChildComp from './ChildComp'

const ParentComp = () => {
    const [count,setCount]=useState('')
    let increase=(val)=>{
        setCount(parseInt(count+val))
    }
    let decrease=(val)=>{
        if(count > 1)
        setCount(parseInt(count-val))
    }
  return (
  <>
    <ChildComp increase={increase} decrease={decrease}/> <hr/>
    <h1>{count}</h1>
  </>
  )
}

export default ParentComp
