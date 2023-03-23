import React from 'react';
import CartContextProvider from '../contexts/CartContext';
import CurrencyContextProvider from '../contexts/CurrencyConext';
import Toolbar from '../components/Toolbar';
import AuthBtn from '../components/AuthBtn';
import Cart from '../components/Cart';
import CurrencySelector from '../components/CurrencySelector';
import Footer from '../components/Footer';
import Content from '../components/Content';
import { Link, Outlet } from 'react-router-dom';
import VisitHistoryContextProvider from '../contexts/VisitHistoryContext';
import { Provider } from 'react-redux';
import store from '../store';

export default function Root() {
    const rootStyle = {
        display: 'grid',
        gridTemplateRows: 'min-content 1fr min-content',
        height: '100vh'
    };

    return (
        <div style={rootStyle}>
            <Provider store={store}>
                <VisitHistoryContextProvider>
                    <CurrencyContextProvider>
                        <CartContextProvider>
                            <Toolbar>
                                <AuthBtn/>
                                <Cart/>
                                <CurrencySelector/>
                                <Link to="debug" style={{ color: 'purple' }}>Debug</Link>
                                <Link to="admin" style={{ color: 'red' }}>Admin</Link>
                                <Link to="todo">Todos list</Link>
                            </Toolbar>
                            <Content>
                                <Outlet/>
                            </Content>
                            <Footer></Footer>
                        </CartContextProvider>
                    </CurrencyContextProvider>
                </VisitHistoryContextProvider>
            </Provider>
        </div>
    )
};
