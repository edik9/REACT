import React from "react";

class ClassCounter extends React.Component{

  constructor(props){
    super(props);                                                   
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
    this.increment = this.decrement.bind(this)
  }

  increment(){
    this.setState({count: this.state.count + 1})
  }
  decrement(){
    this.setState({count: this.state.count - 1})
  }

  render(){
    return(
      <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.increment}>жми сюды</button>
      <button onClick={this.decrement}>нет сюды</button>
      </div>
    )
  } 
  
}

export default ClassCounter