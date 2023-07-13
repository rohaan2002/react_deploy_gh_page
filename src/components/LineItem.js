import { FaTrashAlt } from 'react-icons/fa'
import React from 'react'

const LineItem = ({element, handleCheck, handleDelete}) => {
    return (
        <>
            
            <li className='item'>
                <input
                    type='checkbox'
                    onChange={() => handleCheck(element.id)}
                    on
                    checked={element.checked}
                />
                <label
                    style={(element.checked) ? { textDecoration: 'line-through' } : null}
                    onDoubleClick={() => handleCheck(element.id)}
                >{element.item}</label>
                {/* <button>Delete</button> */}
                <FaTrashAlt
                    role='button'
                    tabIndex='0'
                    onDoubleClick={() => handleDelete(element.id)}
                    aria-label={`Delete ${element.item}`}  //aria label provide extra info on objects like icons or img that may be of use to assistive technologies(used by disable people)

                >


                </FaTrashAlt>
            </li>

        </>
    )
}

export default LineItem