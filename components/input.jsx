import React from 'react'
const input = (props) => {
    const inputStyle = {
      padding: "10px",
      backgroundColor: "white",
      border: "none",
    }
  return (
    <div>
      <input style = {inputStyle} type={props.type} placeholder={props.placeholder} onChange={props.function} >{props.title}</input>
    </div>
  )
}

export default input
