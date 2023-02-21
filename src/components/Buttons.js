import React from 'react'

export default function Buttons({ element, useState: {state, setState} }) {
  const handleClick = ({target}) => {
    const newStatus = state[target.id - 1].status === 0 ? 1 : 0;
    
    setState(
      [...state], 
      state[target.id - 1].status = newStatus
      );
  }
  return (
    <div>
      <button
              className='buttons'
              id={element.id}
              onClick={handleClick}
            >
              {element.status === 0 ? '📪' : '📬'}
            </button>
          
    </div>
  )
}
