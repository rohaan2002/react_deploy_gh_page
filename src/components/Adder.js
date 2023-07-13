import React from 'react'
import { FaPlusCircle }  from 'react-icons/fa'
import { useRef } from 'react'
const Adder = ({newItem,setNewItem,handleSubmit}) => {
    const inputRef= useRef();
    
    return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input
        ref={inputRef}
        autoFocus
        id="addItem"
        type="text"
        placeholder='Add Item'
        required
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        // so has now become controlled input, in which there's single source of truth for it, IT CAN ONLY BE CHANGED/WRITTEN USING STATE VARIABLE... here the [value={newItem}] so only way to change value is when newItem is changed, and since its STATE VARIABLE, it required newer values to be setted as newItem using setNewItem().
        ></input>
        <button id='btner'
        type="submit"
        // onClick={handleSubmit}
        aria-label="Add Item"
        onClick={()=> inputRef.current.focus()}
        >
            <FaPlusCircle></FaPlusCircle>
        </button>
        

    </form>
  )
}

export default Adder