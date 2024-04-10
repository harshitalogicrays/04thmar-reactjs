import React, { useCallback, useEffect, useRef, useState } from 'react'

const Refdemo = () => {
    let [password,setPassword]=useState('')
    let [length,setLength]=useState(6)
    let [numbersAllowed,setNumbersAllowed]=useState(false)
    let [charAllowed,setCharAllowed]=useState(false)
    let copyRef=useRef()

    let passwordGenerator=useCallback(  ()=>{
        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(numbersAllowed) str+='0987654321'
        if(charAllowed) str+='!@#$%^&*()_+=.'

        let data=''
        for(let i=0;i<length;i++){
            data +=str.charAt(Math.floor(Math.random()*str.length))
        }
        setPassword(data)
    }, [ length,numbersAllowed,charAllowed])
  
    useEffect(()=>{
        passwordGenerator()
    },[length,numbersAllowed,charAllowed])

    let handleCopy=()=>{
        copyRef.current.select()
        copyRef.current.setSelectionRange(0,5)
    }
    return (
   <>
    <div className="container col-6 mt-5">
        <div className="mb-3 input-group">
            <input type="text" className='form-control' value={password} ref={copyRef} />
            <button type="button" class="btn btn-primary" onClick={handleCopy}>
                Copy
            </button>
            
        </div>
        <div className="row">
            <div className="col-5">
            <input type="range"  min={4} max={100} value={length} onChange={(e)=>setLength(e.target.value)} /> length:({length})
            </div>
            <div className="col-2">
                <input type="checkbox" onClick={()=>setNumbersAllowed(!numbersAllowed)}></input>Numbers
            </div>
            <div className="col-3">
                <input type="checkbox" onClick={()=>setCharAllowed(!charAllowed)}></input>Characters
            </div>
        </div>
       
    </div>
   </>
    )
}

export default Refdemo
