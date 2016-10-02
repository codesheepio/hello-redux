import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.addCounter = this.addCounter.bind(this)
  }
  addCounter() {
    this.props.addCounter()
  }
  render() {
    return (
      <div className="counter">
        <h1>{this.props.label}</h1>
        <h2>{this.props.counter}</h2>
        <button onClick={this.addCounter}>+1</button>
      </div>
    )
  }
}
