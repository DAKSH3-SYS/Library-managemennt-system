import React from 'react'
const button = (props) => {
    const buttonStyle = {
        marginTop: props.marginTop,
        cursor: "pointer",
        backgroundColor: props.bgColor ,
        border: "none",
        color: "white",
        borderRadius: "10px",
        
        alignItems:"centre",
    }
  return (
    <div>
      <button className="w-[200px]" style = {buttonStyle} onClick={props.function} >{props.title}</button>
    </div>
  )
}

export default button
