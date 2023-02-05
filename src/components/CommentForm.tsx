import React, { useState } from 'react';

type CommentFormProps = {
    onCommentAdded: (val: string) => void;
}

const CommentForm = ({ onCommentAdded }: CommentFormProps) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        onCommentAdded(value);
        setValue('');
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={value} onChange={e => setValue(e.target.value)}></textarea>
            <button type="submit">Add</button>
        </form>
    )
};

export default CommentForm;