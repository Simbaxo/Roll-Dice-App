import React, { Component } from 'react'
import Die from './Die'

class RollDice extends Component {
  constructor(props) {
    super(props)
    this.state = { value: 'one' }
    this.roll = this.roll.bind(this)
  }

  roll(e) {
    let nums = ['two', 'three', 'four', 'five', 'six']
    let rand = nums[Math.floor(Math.random * nums.length)]
    this.setState({ value: rand })
  }

  render() {
    return (
      <div>
        <h1>This is working!</h1>
        {

        }
        <Die value={this.state.value} />
        <Die value={this.state.value} />
        <button onClick={this.roll}>Roll Dice!</button>
      </div>
    )
  }
}

export default RollDice