import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../todosSlice';
import { RootState } from '../store';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export default function Todo() {
    const dispatch = useDispatch();
    const todos = useSelector<RootState, Todo[]>((state) => state.todos.todos);
    const status = useSelector<RootState, string>((state) => state.todos.status);
    const error = useSelector<RootState, string | null>((state) => state.todos.error);

    useEffect(() => {
        dispatch(fetchTodos() as any);
    }, [dispatch]);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (status === "failed") {
        return <div>{error}</div>;
    }

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.title} - <strong>{todo.completed ? 'Done' : 'Not Done'}</strong></li>
            ))}
        </ul>
    );
}