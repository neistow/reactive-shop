import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Main from './routes/main';
import ItemDetails from './routes/item-details';
import Debug from './routes/debug';
import Admin from './routes/admin';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '',
                element: <Main/>
            },
            {
                path: 'items/:itemId',
                element: <ItemDetails/>
            },
            {
                path: 'debug',
                element: <Debug/>
            },
            {
                path: 'admin',
                element: <Admin/>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
