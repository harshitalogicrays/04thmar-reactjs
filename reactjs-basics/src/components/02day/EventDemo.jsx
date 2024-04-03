import React from 'react'

const EventDemo = () => {
    function handleClick(){
        alert("handleClick called")
    }
    let handleClick1=(a,b)=>alert(a+b)
  return (
  <>
    <button type="button" class="btn btn-primary me-3" onClick={()=>alert("button clicked")}> 
    click me to display alert </button>
    <button type="button" class="btn btn-info me-2" onClick={handleClick}> 
    click me to handleClick </button>
    <button type="button" class="btn btn-info me-2" onClick={()=>handleClick()}> 
    click me to handleClick </button>
    <button type="button" class="btn btn-danger me-2" onClick={()=>handleClick1(2,4)}> 
    click me to handleClick1 </button>
  </>
  )
}

export default EventDemo
