import { FaTrashAlt } from 'react-icons/fa';
import LineItem from './LineItem';
export default function ItemList({ items, handleCheck, handleDelete }) {
    return (
        <>
            {items.length ? (
                <ul>
                    {items.map((element) => (
                        <LineItem
                            key={element.id}
                            element={element}
                            handleCheck={handleCheck}
                            handleDelete={handleDelete}
                        ></LineItem>
                    ))}
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </>
    )
}