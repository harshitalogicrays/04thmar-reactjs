import React from 'react'
import {MyCustomButton, MyText} from './MyCustomButton'

const CSSinReact = () => {
    let styles={
        color:'lightpink',border:"2px solid black",textTransform:"capitalize"
    }
  return (
    <>
        <h1 style={{color:'red',backgroundColor:'yellow'}}>inline css</h1>
        <h2 style={styles}>css variable</h2>
        <p style={styles}>css variable</p>
        <h3 className='App'>CSS file</h3>
        {/* <h1 className={cssmodule.error}>Hello React - css module</h1> */}

        <MyCustomButton>CLick ME</MyCustomButton>
        <MyText type="text"></MyText>
    </>
  )
}

export default CSSinReact
