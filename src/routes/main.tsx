import React, { useEffect, useState } from 'react';
import { Item } from '../types';
import CategoryList from '../components/CategoryList';
import ItemList from '../components/ItemList';
import { queryItems } from '../api/mocks';

export default function Main() {
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        queryItems(selectedCategoryId)
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