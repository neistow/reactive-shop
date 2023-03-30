import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

interface ToDo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

export interface ToDoState {
    todos: ToDo[];
    isLoading: boolean;
    error: string | null;
}

const initialState: ToDoState = {
    todos: [],
    isLoading: false,
    error: null,
};

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
        fetchTodosStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        fetchTodosSuccess(state, action: PayloadAction<ToDo[]>) {
            state.todos = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        fetchTodosFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchTodosStart, fetchTodosSuccess, fetchTodosFailure } = toDoSlice.actions;

function* fetchTodosSaga(): Generator<unknown, void, ToDo[]> {
    try {
        const response: any = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos');
        console.log(response);
        yield put(fetchTodosSuccess(response.data));
    } catch (error: any) {
        yield put(fetchTodosFailure(error.message));
    }
}

export function* toDoSaga() {
    yield takeLatest(fetchTodosStart.type, fetchTodosSaga);
}
