import { Item } from '../types';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

type ItemListProps = {
    items: Item[];
}

const ItemList = ({ items }: ItemListProps) => {
    const { addItem, removeItem } = useContext(CartContext);

    return (
        <div>
            {items.map(item =>
                <div key={item.name}>
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                    <button onClick={() => addItem(item)}>+</button>
                    <button onClick={() => removeItem(item)}>-</button>
                </div>
            )}
        </div>
    );
};

export default ItemList;