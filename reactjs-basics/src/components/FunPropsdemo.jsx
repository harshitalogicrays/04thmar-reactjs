import React from 'react'

// const FunPropsdemo = (props) => {
//     //props={ username:"Happy" address:"Pune"}
//     let a=20
//     console.log(props)
//     // props.username="Meera" //error read only
//   return (
//     <div>
//       <h1>Prop demo</h1>
//       <h2>{a}</h2>
//       <h3>{props.username}</h3>
//       <h3>{props.address}</h3>
//     </div>
//   )
// }


const FunPropsdemo = ({username,address,...props}) => { 
    return (
    <>
      <h1>Prop demo</h1>
      <h3>{username}</h3>
      <h3>{address}</h3>
      <h3>{props.mobile}</h3>
    </>
  )
}
export default FunPropsdemo
