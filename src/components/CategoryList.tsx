import { useEffect, useState } from 'react';
import { Category } from '../types';
import { queryCategories } from '../api/mocks';
import styles from './CategoryList.module.css'

type CategoryListProps = {
    selectedCategoryId: number | null;
    onCategorySelected: (categoryId: number | null) => void;
}

const CategoryList = ({ selectedCategoryId, onCategorySelected }: CategoryListProps) => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        queryCategories()
            .then(data => setCategories(data))
    }, []);

    return (
        <div className={styles.categoryList}>
            <p
                className={selectedCategoryId === null ? styles.selectedCategory : undefined}
                onClick={() => onCategorySelected(null)}
            >
                ALL
            </p>
            {categories.map(category => (
                <p
                    key={category.id}
                    className={category.id === selectedCategoryId ? styles.selectedCategory : undefined}
                    onClick={() => onCategorySelected(category.id)}
                >
                    {category.name}
                </p>
            ))}
        </div>
    );
};

export default CategoryList;