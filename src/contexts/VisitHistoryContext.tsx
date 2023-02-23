import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type VisitHistoryContext = {
    visits: string[];
};

export const VisitHistoryContext = createContext<VisitHistoryContext>({
    visits: []
});

const VisitHistoryContextProvider = ({ children }: PropsWithChildren) => {
    const [visits, setVisits] = useState<string[]>([]);
    const location = useLocation();
    useEffect(() => {
        setVisits([...visits, location.pathname]);
    }, [location])

    const values = {
        visits
    };
    return <VisitHistoryContext.Provider value={values}>{children}</VisitHistoryContext.Provider>
};

export default VisitHistoryContextProvider;