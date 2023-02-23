const { items, categories } = {
    "items": [
        {
            "id": 1,
            "name": "Product A",
            "description": "Product A",
            "price": 1,
            "categoryId": 1
        },
        {
            "id": 2,
            "name": "Product B",
            "description": "Product B",
            "price": 2,
            "categoryId": 2
        },
        {
            "id": 3,
            "name": "Product C",
            "description": "Product C",
            "price": 3,
            "categoryId": 3
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "Category A"
        },
        {
            "id": 2,
            "name": "Category B"
        },
        {
            "id": 3,
            "name": "Category C"
        }
    ]
};

export function queryItems(categoryId?: number | null) {
    const response = categoryId
        ? items.filter(i => i.categoryId === categoryId)
        : [...items];
    return Promise.resolve(response);
}

export function queryItem(id: number) {
    const response = items.find(i => i.id === id);
    return Promise.resolve(response);
}

export function queryCategories() {
    const response = [...categories];
    return Promise.resolve(response);
}