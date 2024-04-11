import React, { PureComponent } from 'react'

export default class PureComponentDemo extends PureComponent {
    constructor(props) {
        super(props)
        console.log("constructor called")
        this.state = {
              username:"Ram"
        }
      }
    render() {
      console.log("render called")
      return (
        <div>
              <h1>{this.state.username}</h1>
              <button type="button" onClick={()=>{console.log("button clicked");
              this.setState({username:"Meera"})
          }}>Change Name</button>
        </div>
      )
    }
}
