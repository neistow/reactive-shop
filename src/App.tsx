import React, { useState } from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import Content from './components/Content';
import Footer from './components/Footer';
import CategoryList from './components/CategoryList';
import ItemList from './components/ItemList';

export interface Item {
    category: string;
    price: number;
    name: string;
}

interface CartItem {
    item: Item;
    count: number;
}

const ITEMS: Item[] = [
    { category: 'shoes', price: 10, name: 'Shit shoes' },
    { category: 'pants', price: 500, name: 'Shitted pants' },
    { category: 'shirts', price: 44, name: 'Fathers T-Shirt' },
    { category: 'other', price: 200, name: 'Just s`hit' },
];
const CATEGORIES = [
    'shirts',
    'shoes',
    'pants',
    'other'
];

function App() {
    const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const displayedItems = ITEMS.filter(i => i.category === selectedCategory);
    const totalCartItems = cartItems.reduce((prev, curr) => prev + curr.count, 0)

    const handleAddToCart = (item: Item) => {
        const existingItem = cartItems.find(ci => ci.item.name === item.name);
        if (existingItem == null) {
            setCartItems([...cartItems, { item, count: 1 }]);
            return;
        }
        existingItem.count += 1;
        setCartItems([...cartItems]);
    };

    return (
        <div className="main">
            <Toolbar/>
            <Content>
                <h4>Cart count: {totalCartItems}</h4>
                <CategoryList
                    onCategorySelected={setSelectedCategory}
                    categories={CATEGORIES}
                    selectedCategory={selectedCategory}
                />
                <ItemList
                    items={displayedItems}
                    onAddToCart={handleAddToCart}
                />
            </Content>
            <Footer></Footer>
        </div>
    );
}

export default App;
