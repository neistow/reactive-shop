import React, { useEffect, useState } from 'react';
import { Item } from '../types';
import CategoryList from '../components/CategoryList';
import ItemList from '../components/ItemList';
import { queryItems } from '../api/mocks';
import { useGetProductsQuery } from '../services/products';

export default function Main() {
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
    const { data = [], isFetching } = useGetProductsQuery()

    return (
        <>
            <CategoryList
                onCategorySelected={setSelectedCategoryId}
                selectedCategoryId={selectedCategoryId}
            />
            {isFetching ? (
                <p>Loading products...</p>
            ) : (
                <ItemList items={data.map(p => ({ ...p, name: p.title, categoryId: 1 }))}/>
            )
            }
        </>
    )
}