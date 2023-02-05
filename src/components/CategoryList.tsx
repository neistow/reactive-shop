import { useEffect, useState } from 'react';
import { Category } from '../types';

type CategoryListProps = {
    selectedCategoryId: number | null;
    onCategorySelected: (categoryId: number | null) => void;
}

const CategoryList = ({ selectedCategoryId, onCategorySelected }: CategoryListProps) => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        fetch('http://localhost:4000/categories')
            .then(r => r.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div style={{ display: 'flex', columnGap: '0.5rem' }}>
            <p
                style={{ fontWeight: selectedCategoryId === null ? 'bold' : undefined }}
                onClick={() => onCategorySelected(null)}
            >
                ALL
            </p>
            {categories.map(category => (
                <p
                    key={category.id}
                    style={category.id === selectedCategoryId ? { fontWeight: 'bold' } : {}}
                    onClick={() => onCategorySelected(category.id)}
                >
                    {category.name}
                </p>
            ))}
        </div>
    );
};

export default CategoryList;