import React from 'react'
import Card from '../card/Card'

function CardsTable(user) {
  
  return (
    <div className='cards-table'>
    {
      user?.cards?.map(card => <Card card={card} />)
    }
    </div>
  )
}

export default CardsTable