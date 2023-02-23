import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Item } from '../types';
import CommentForm from '../components/CommentForm';
import { queryItem } from '../api/mocks';

export default function ItemDetails() {
    const { itemId } = useParams();
    const [item, setItem] = useState<Item | null>(null);

    const [comments, setComments] = useState<string[]>([]);
    const onCommentAdded = (comment: string) => setComments([...comments, comment]);

    useEffect(() => {
        queryItem(+itemId!)
            .then(d => setItem(d ?? null));
    }, [itemId]);

    return <div>
        {item &&
            <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
            </div>
        }
        <h5>Comments:</h5>
        <div>
            {comments.map((c, i) => <p key={i}>{c}</p>)}
        </div>
        <CommentForm onCommentAdded={onCommentAdded}/>
    </div>
}