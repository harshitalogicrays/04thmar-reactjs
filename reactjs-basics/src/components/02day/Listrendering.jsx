import React from 'react'

const Listrendering = () => {
    let names=["gfd","sad","erer","qwqw","eer","Eetr","rer"]
    let result= names.map((name,index)=><h1 key={index}>{name}</h1>)
  return (
    <>
      {/* {names.map((name,index)=><h1 key={index}>{name}</h1>)} */}
      {result}
    </>
  )
}

export default Listrendering
