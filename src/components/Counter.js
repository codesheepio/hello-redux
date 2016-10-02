import React, { Component } from 'react'

const Counter = (props) => {
  const addCounter = () => {
    props.addCounter()
  }
  return (
    <div className="counter">
      <h1>{props.label}</h1>
      <h2>{props.counter}</h2>
      <button onClick={addCounter}>+1</button>
    </div>
    )
}

export default Counter
