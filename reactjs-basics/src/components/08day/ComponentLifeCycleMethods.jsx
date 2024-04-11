import React, { Component } from 'react'

export default class ComponentLifeCycleMethods extends Component {
    constructor(props) {
      super(props)
      console.log("constructor called")
      this.state = {
            username:"Ram"
      }
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps called")
        return {state}
    }
    componentDidMount(){
        console.log("componentDidMount called")
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate called")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("getSnapshotBeforeUpdate called",prevState)
        return prevState
    }
    componentDidUpdate(){
        console.log("componentDidUpdate called")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount called")
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
