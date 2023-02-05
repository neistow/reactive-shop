import React from 'react';
import CartContextProvider from '../contexts/CartContext';
import CurrencyContextProvider from '../contexts/CurrencyConext';
import Toolbar from '../components/Toolbar';
import AuthBtn from '../components/AuthBtn';
import Cart from '../components/Cart';
import CurrencySelector from '../components/CurrencySelector';
import Footer from '../components/Footer';
import Content from '../components/Content';
import { Outlet } from 'react-router-dom';

export default function Root() {
    const rootStyle = {
        display: 'grid',
        gridTemplateRows: 'min-content 1fr min-content',
        height: '100vh'
    };

    return (
        <div style={rootStyle}>
            <CurrencyContextProvider>
                <CartContextProvider>
                    <Toolbar>
                        <AuthBtn/>
                        <Cart/>
                        <CurrencySelector/>
                    </Toolbar>
                    <Content>
                        <Outlet/>
                    </Content>
                    <Footer></Footer>
                </CartContextProvider>
            </CurrencyContextProvider>
        </div>
    )
};
