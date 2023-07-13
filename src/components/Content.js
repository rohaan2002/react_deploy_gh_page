import React from 'react'
import './Content.css'
import ItemList from './itemList'


const Content = ({ items, handleCheck, handleDelete }) => {

  return (
    <>
      <ItemList
        items={items}
        // setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      >

      </ItemList>
     
      {/* <p>
            Hello {handleNameChange}!
        </p>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={()=>{handleClick2()}}>Click Me</button>
        thats how you pass a function with parameter to the event, by calling it inside another function which only gets called when event happens 
        <button onClick={handleClick3}>Click me to see event details</button> */}
    </>
  )
}

export default Content