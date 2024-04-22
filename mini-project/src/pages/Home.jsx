import axios from 'axios'
import React, { useEffect } from 'react'

const Home = () => {
  useEffect(()=>{
    getData()
  },[])

  // let getData=()=>{
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //   .then((res)=>res.json()).then(data=>console.log(data))
  // }

  // let getData=async()=>{
  //  let res= await fetch("https://jsonplaceholder.typicode.com/todos")
  //   let data=await res.json()
  //   console.log(data)
  // }

  //   let getData=()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/todos")
  //   .then((res)=>console.log(res.data))
  // }
  let getData=async()=>{
    // let res=await axios.get("https://jsonplaceholder.typicode.com/todos")
    // console.log(res.data)
    // let res=await axios.get("http://localhost:1000/employee")
    // console.log(res.data)

    // let res=await axios.get("https://66262ccc052332d55321e6a9.mockapi.io/users")
    // console.log(res.data)
  }
  return (
   <h1>Home Page</h1>
  )
}

export default Home
