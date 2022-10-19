import './actionButton.css'
import React from 'react'

const ActionButton = ({ color, text, onClickAction }) => {
  return (
    <button
      className="action_button"
      style={{
        color: color,
        borderRadius: '1rem',
        padding: '.5rem',
        margin: '.5rem',
      }}
      onClick={onClickAction}
    >
      {text}
    </button>
  )
}

export default ActionButton
