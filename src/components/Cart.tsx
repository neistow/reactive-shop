import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
    const { totalItemsAmount } = useContext(CartContext);

    return (
        <div>
            Total items: {totalItemsAmount}
        </div>
    )
};

export default Cart;