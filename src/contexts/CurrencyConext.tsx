import { createContext, PropsWithChildren, useMemo, useState } from 'react';


type Currency = 'USD' | 'UAH'

type CurrencyContext = {
    selectedCurrency: Currency;
    selectCurrency: (currency: Currency) => void;
    convertPrice: (units: number) => number;
};

export const CurrencyContext = createContext<CurrencyContext | null>(null);

const CurrencyContextProvider = ({ children }: PropsWithChildren) => {
    const [currenciesInfo, setCurrenciesInfo] = useState<Record<Currency, number>>({
        ['UAH']: 23.23,
        ['USD']: 44.44,
    });
    const [selectedCurrency, setSelectedCurrency] = useState<Currency>('UAH');
    const currentRate = useMemo(() => currenciesInfo[selectedCurrency], [selectedCurrency])

    const selectCurrency = (currency: Currency) => setSelectedCurrency(currency);
    const convertPrice = (units: number) => units * currentRate;

    const values = {
        selectedCurrency,
        selectCurrency,
        convertPrice
    };
    return <CurrencyContext.Provider value={values}>{children}</CurrencyContext.Provider>
};

export default CurrencyContextProvider;