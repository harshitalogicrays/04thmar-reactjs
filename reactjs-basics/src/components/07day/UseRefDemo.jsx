import React, { useEffect, useRef, useState } from 'react'
import RefChildren from './RefChildren'

const UseRefDemo = () => {
    // let [name,setName]=useState('')
    // let fetchData=()=>{
    //     alert(name)
    // }

    let nameRef=useRef()
    let focusRef=useRef()
    let fetchDatabyRef=()=>{
        nameRef.current.style.color="blue"
        alert(nameRef.current.value)}
    useEffect(()=>{
        // nameRef.current.value="Happy"
        // focusRef.current.focus()
    },[])


    let inputRef=useRef()
  return (
    <>
        {/* <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text"  className="form-control" value={name} onChange={(e)=>{
                console.log(name);
                setName(e.target.value)}
                }/>
        </div>
        <button type="button" className='btn btn-primary' onClick={fetchData}>Fetch Data</button> */}
        
        {/* <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text"  className="form-control" ref={nameRef}/>
        </div>
        <button type="button" className='btn btn-primary' onClick={fetchDatabyRef}>Fetch Data</button><br/> */}

        {/* <h1>LoginPage</h1><hr/>
        <div className="mb-3">
            <label className="form-label">Email</label>
            <div className="input-group">
            <input type="text"  ref={focusRef} className="form-control" />
            <button type="button"
                class="btn btn-primary" 
                onClick={()=>focusRef.current.focus()}
                 >
                Focus
            </button>
            
            </div>
            
        </div>
        <div className="mb-3">
            <label className="form-label">PAssword</label>
            <input type="password"  className="form-control"/>
        </div> */}
         <button type="button" className='btn btn-primary' 
         onClick={()=>inputRef.current.focus()}>Fetch Data</button><br/>
        <hr/>
        <RefChildren ref={inputRef}/>
    </>
  )
}

export default UseRefDemo
