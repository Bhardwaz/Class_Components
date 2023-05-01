import React from 'react'

const FnChildComponent = (props) => {
  return (
    <div>
        <h1> FnChildComponent </h1>
        <h1> {props.name}  </h1>
    </div>
  )
}

export default FnChildComponent