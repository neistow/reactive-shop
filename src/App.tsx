import React, { useMemo, useState } from 'react';
import './App.css';

import Toolbar from './components/Toolbar';
import AuthBtn from './components/AuthBtn';
import Content from './components/Content';
import CategoryList from './components/CategoryList';
import ItemList from './components/ItemList';
import Footer from './components/Footer';

import CartContextProvider from './contexts/CartContext';

import { Item } from './types';
import Cart from './components/Cart';

const categories = [
    'shirts',
    'shoes',
    'pants',
    'other'
];

const items: Item[] = new Array(30).fill(null)
    .map((_, idx) => ({
        id: idx + 1,
        name: `Item ${idx + 1}`,
        price: Math.random() * (399.99 - 99.99) + 99.99,
        category: categories[Math.floor(Math.random() * categories.length)],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, eaque.'
    }));

function App() {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const displayedItems = useMemo(() => items.filter(i => i.category === selectedCategory), [selectedCategory]);

    return (
        <div className="main">
            <CartContextProvider>
                <Toolbar>
                    <AuthBtn/>
                    <Cart/>
                </Toolbar>
                <Content>
                    <CategoryList
                        onCategorySelected={setSelectedCategory}
                        categories={categories}
                        selectedCategory={selectedCategory}
                    />
                    <ItemList items={displayedItems}/>
                </Content>
                <Footer></Footer>
            </CartContextProvider>
        </div>
    );
}

export default App;
