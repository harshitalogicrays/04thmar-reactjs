import React, { Fragment } from 'react'
const Childrenpropsdemo = (emp) => {
  return (
    <Fragment>
      <h1 className='text-primary'>{emp.empid}</h1>
      <h2 className='text-danger'>{emp.ename}</h2>
        {/* {emp.children} */}
        {/* {emp.children.length} */}
        {/* {emp.children[0]} */}

        {/* {emp.children.map((e,index)=><div>{e}</div>)} */}

{emp.children.map((e,index)=>{
       return <Fragment key={index}>{e}</Fragment>})}
    </Fragment>
    
  )
}

export default Childrenpropsdemo
