import React, { Component } from 'react'

export default class Counter extends Component {
  state = {
    number : 0
  };

  

  increase = () => {
    this.setState({
      number : this.state.number + 1
    })
  }

  decrease = () => {
    this.setState({
      number : this.state.number - 1
    })
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-4"><button onClick = {this.decrease} className="btn btn-primary btn-block" id="decrease">AZALT</button></div>
        <div className="col-md-4"><h1 className="text-center">{this.state.number}</h1> </div>
        <div className="col-md-4"><button onClick = {this.increase} className="btn btn-primary btn-block" id="increase">ARTTIR</button></div>
      </div>
      
    )
  }
}
