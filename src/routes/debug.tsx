import { useContext } from 'react';
import { VisitHistoryContext } from '../contexts/VisitHistoryContext';

export default function Debug() {
    const { visits } = useContext(VisitHistoryContext);

    return (<ol>
        {visits.map(v => <li key={Math.random()}>{v}</li>)}
    </ol>)
}