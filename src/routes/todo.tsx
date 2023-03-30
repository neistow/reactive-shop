import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export default function Todo() {
    const todos = useSelector<RootState, Todo[]>((state) => state.todos.todos);
    const loading = useSelector<RootState, boolean>((state) => state.todos.isLoading);
    const error = useSelector<RootState, string | null>((state) => state.todos.error);

    if(loading){
        return <p>Loading todos....</p>;
    }

    if (error) {
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