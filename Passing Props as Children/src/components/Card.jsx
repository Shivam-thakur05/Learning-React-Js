import React from 'react'

const Card = ({name,children}) => {
  return (
    <div>
      {name} {children}
    </div>
  )
}

export default Card
