import React, { useState } from 'react'
import Image1 from '../../assets/images/a.jpg'
const Statedemo1 = (props) => {
    let [num1, setNum1]=useState('')
    let [num2,setNum2]=useState('')
    let [result,setResult]=useState(0)

    let [obj,setObj]=useState({username:'',email:''}) //obj.username 
    let [arr,setArr]=useState(["","","","",""]) //arr[0]
    let [propdata,setPropdata]=useState(props.address)

    let handleAdd=(e)=>{
        e.preventDefault()
        setResult(parseInt(num1)+parseInt(num2)) }
  return (
   <>
    <div className="container mt-5 shadow p-3">
        <div className="row">
            <div className="col">
                {/* <img src={Image1}  className='img-fluid'/> */}
                <img src={require('../../assets/images/a.jpg')} className='img-fluid'/>
            </div>
            <div className="col">
                <form onSubmit={handleAdd}>
                <div className="mb-3">
                    <label class="form-label">Number1</label>
                    <input type="text" class="form-control" 
                    value={num1} onChange={(e)=>{
                        console.log(e)
                        setNum1(e.target.value)
                    
                    }}/>
                </div>
                <div className="mb-3">
                    <label class="form-label">Number2</label>
                    <input type="text" class="form-control" value={num2} onChange={(e)=>setNum2(e.target.value)}/>
                </div>
                <button type="submit" class="btn btn-primary" > Add  </button>
                  
                </form>
                <h1>  {result}</h1>
            </div>
        </div>
    </div>
  
   
   </>
  )
}

export default Statedemo1
