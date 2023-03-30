import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Products {
    id: number;
    title: string;
    price: number;
    description: string;
}

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com'
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<Products[], void>({
            query: () => '/products',
        }),
    }),
})

export const { useGetProductsQuery } = productsApi