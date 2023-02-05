type CategoryListProps = {
    categories: string[];
    selectedCategory: string;
    onCategorySelected: (category: string) => void;
}

const CategoryList = ({ categories, selectedCategory, onCategorySelected }: CategoryListProps) => {
    return (
        <div style={{ display: 'flex', columnGap: '0.5rem' }}>
            {categories.map(category => (
                <p
                    key={category}
                    style={category === selectedCategory ? { fontWeight: 'bold' } : {}}
                    onClick={() => onCategorySelected(category)}
                >
                    {category}
                </p>
            ))}
        </div>
    );
};

export default CategoryList;