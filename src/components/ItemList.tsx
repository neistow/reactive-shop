import { Item } from '../App';

type ItemListProps = {
    items: Item[];
    onAddToCart: (item: Item) => void
}

const ItemList = ({ items, onAddToCart }: ItemListProps) => {
    return (
        <div>
            {items.map(item =>
                <div key={item.name}>
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                    <button onClick={() => onAddToCart(item)}>Add to cart</button>
                </div>
            )}
        </div>
    );
};

export default ItemList;