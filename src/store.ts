import { configureStore } from '@reduxjs/toolkit';
import themeReducer, { Theme } from './themeSlice';
import todosReducer, { TodosState } from './todosSlice';

export type RootState = {
    theme: Theme,
    todos: TodosState
}

const initialState = {
    theme: 'light',
}

const store = configureStore({
    reducer: {
        theme: themeReducer,
        todos: todosReducer
    },
    preloadedState: initialState as any,
});

export default store;