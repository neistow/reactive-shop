import { configureStore } from '@reduxjs/toolkit';
import themeReducer, { Theme } from './themeSlice';
import { productsApi } from './services/products';
import { toDoSaga, toDoSlice, ToDoState } from './todosSlice';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export type RootState = {
    theme: Theme,
    todos: ToDoState
}

const initialState = {
    theme: 'light',
}

const store = configureStore({
    reducer: {
        theme: themeReducer,
        todos: toDoSlice.reducer,
        [productsApi.reducerPath]: productsApi.reducer
    },
    preloadedState: initialState as any,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(productsApi.middleware)
            .concat(sagaMiddleware),
});

sagaMiddleware.run(toDoSaga);

export default store;