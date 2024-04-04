import React from 'react'

const ConditionalRendering = ({login,username}) => {
    // console.log(login)
  /*  if(login){
        return(<>   <h1>Welcome {username}</h1>
                    <h2>Welcome to LRA</h2>
        </>)
    }
    else {
        return(<><h1>Welcome Guest</h1></>)
    } */
  
  /*  let result
    if(login){
        result =<>  <h1>Welcome {username}</h1>
                    <h2>Welcome to LRA</h2>   </>
    }
    else {
        result = <><h1>Welcome Guest</h1></>
    }
  
    return (<>{result}</>) */


    return (<>
        <       h1>Conditonal </h1>
            {login ? <>  <h1>Welcome {username}</h1>
                    <h2>Welcome to LRA</h2>   </>:<><h1>Welcome Guest</h1></> }
                <hr/>
            {login && <>  <h1>Welcome {username}</h1>
                    <h2>Welcome to LRA</h2> </> } 
    </>)
}

export default ConditionalRendering
