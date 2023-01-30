import { createContext, PropsWithChildren, useMemo, useState } from "react";
import { Item } from '../types';

interface CartItem {
    item: Item;
    count: number;
}

type CartContext = {
    basketItems: CartItem[],
    totalItemsAmount: number,
    addItem: (item: Item) => void,
    removeItem: (item: Item) => void
}

export const CartContext = createContext<CartContext>({
    addItem: () => null,
    removeItem: () => null,
    basketItems: [],
    totalItemsAmount: 0
});

const CartContextProvider = ({ children }: PropsWithChildren) => {
    const [basketItems, setBasketItems] = useState<CartItem[]>([]);

    const totalItemsAmount = useMemo(() =>
            basketItems.reduce((prev, curr) => prev + curr.count, 0),
        [basketItems]);
    const addItem = (item: Item) => {
        const existingItem = basketItems.find(bi => bi.item.id === item.id);
        if (existingItem == null) {
            setBasketItems([...basketItems, { item, count: 1 }]);
            return;
        }

        existingItem.count += 1;
        setBasketItems([...basketItems]);
    };
    const removeItem = (item: Item) => {
        const itemIdx = basketItems.findIndex(bi => bi.item.id === item.id);
        if (itemIdx === -1) {
            return;
        }
        const itemToRemove = basketItems[itemIdx];
        itemToRemove.count -= 1;

        const newBasketItems = basketItems.slice();
        if (itemToRemove.count === 0) {
            newBasketItems.splice(itemIdx, 1);
        }
        setBasketItems(newBasketItems);
    };

    const values = {
        basketItems,
        totalItemsAmount,
        addItem,
        removeItem
    };
    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;