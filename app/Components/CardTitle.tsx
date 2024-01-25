import React from 'react'

const CardTitle = (props) => {
  return (
    <div>
        <div>
            <h3>{props.item.title}</h3>
            <p>{props.item.description}</p>
        </div>
  </div>
  )
}

export default CardTitle