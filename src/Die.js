import React from 'react'
import './Die.css'

function Die(props) {
  return (
    <div>
      <i className={`fas fa-dice-${props.value}`}></i>
    </div>
  )
}

export default Die