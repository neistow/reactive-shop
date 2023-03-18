import { configureStore } from '@reduxjs/toolkit';
import themeReducer, { Theme } from './themeSlice';

export type RootState = {
    theme: Theme
}

const initialState = {
    theme: 'light',
}

const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
    preloadedState: initialState as any,
});

export default store;