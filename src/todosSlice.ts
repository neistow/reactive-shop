import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface TodosState {
    todos: Todo[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialState: TodosState = {
    todos: [],
    status: "idle",
    error: null,
};

export const fetchTodos = createAsyncThunk<
    Todo[],
    void,
    {
        rejectValue: string;
    }
>("todos/fetchTodos", async (_, { rejectWithValue }) => {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos'
        );
        const data = await response.json();
        return data.slice(0, 10);
    } catch (error) {
        return rejectWithValue("Failed to fetch todos");
    }
});

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.todos = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload ?? 'Unknown error';
            });
    },
});

export default todosSlice.reducer;