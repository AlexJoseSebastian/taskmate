import React from 'react'

export const Todos = () => {
  return (
    <div className='main-div'>
      <div className='child-div'>
        <figure>
          <figcaption >
            Add Todo✒️
          </figcaption>
        </figure>
        <div className='addItem'> 
           <input type="text" placeholder="Add Item"/>
        </div>
      </div>

      <h3>Todos List</h3>
      </div>
  )
}
