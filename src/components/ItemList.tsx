import { Item } from '../types';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { CurrencyContext } from '../contexts/CurrencyConext';
import { Link } from 'react-router-dom';

type ItemListProps = {
    items: Item[];
}

const ItemList = ({ items }: ItemListProps) => {
    const { addItem, removeItem } = useContext(CartContext);
    const { convertPrice, selectedCurrency } = useContext(CurrencyContext)!;

    return (
        <div>
            {items.map(item =>
                <div key={item.name}>
                    <h4>{item.name}</h4>
                    <p>{convertPrice(item.price).toFixed(2)} {selectedCurrency}</p>
                    <button onClick={() => addItem(item)}>+</button>
                    <button onClick={() => removeItem(item)}>-</button>
                    <Link to={`items/${item.id}`}>Details</Link>
                </div>
            )}
        </div>
    );
};

export default ItemList;