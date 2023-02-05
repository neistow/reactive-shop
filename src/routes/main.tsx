import React, { useEffect, useState } from 'react';
import { Item } from '../types';
import CategoryList from '../components/CategoryList';
import ItemList from '../components/ItemList';

export default function Main() {
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const url = new URL('http://localhost:4000/items');
        if (selectedCategoryId !== null) {
            url.searchParams.set('categoryId', selectedCategoryId.toString())
        }
        fetch(url.toString())
            .then(r => r.json())
            .then(d => setItems(d));
    }, [selectedCategoryId]);

    return (
        <>
            <CategoryList
                onCategorySelected={setSelectedCategoryId}
                selectedCategoryId={selectedCategoryId}
            />
            <ItemList items={items}/>
        </>
    )
}