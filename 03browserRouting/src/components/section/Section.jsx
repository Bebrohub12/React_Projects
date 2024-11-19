import React from 'react'

function Section(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.pera}</p>
      <button>{props.one}</button>
      {props.two && <button>{props.two}</button>}

    </div>
  )
}

export default Section