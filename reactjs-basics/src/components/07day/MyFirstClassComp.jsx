import React, { Component } from 'react'

export default class MyFirstClassComp extends Component {
    constructor(props) {
      super(props)   
      this.state = {
        username:"Meera",
        result:this.props.marks
    }
    }
    
    handleClick=()=>{
        alert("button clicked")
    }
  render() {
    return (
     <>
        <h1>Class Component Created</h1>
        <h2>{this.props.loggedIn ? "OK" : "Not Ok"}</h2>
        <button
            type="button"
            class="btn btn-primary"
            onClick={this.handleClick}
        >
            Button
        </button>
        <h1>{this.state.username}</h1>

        <div class="mb-3">
            <label for="" class="form-label">Name</label>
            <input
                type="text"
                class="form-control"
                value={this.state.username}
                onChange={(e)=>this.setState({username:e.target.value})}
            />

            {this.state.result}
        </div>
        
     </>
    )
  }
}
