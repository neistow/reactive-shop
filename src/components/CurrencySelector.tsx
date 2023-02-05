import { useContext } from 'react';
import { CurrencyContext } from '../contexts/CurrencyConext';

const CurrencySelector = () => {
    const { selectedCurrency, selectCurrency } = useContext(CurrencyContext)!;

    const swapCurrency = () => {
        const currencyToSet = selectedCurrency === 'UAH' ? 'USD' : 'UAH';
        selectCurrency(currencyToSet);
    };
    return (
        <p>
            Currency: {selectedCurrency}
            <button onClick={() => swapCurrency()}>swap</button>
        </p>
    );
};

export default CurrencySelector;