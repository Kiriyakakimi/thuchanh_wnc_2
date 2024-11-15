import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Car from './car';
import {Hello, Hello2,HelloPerson} from './Hello';
import Productlist from './productlist';
import Productdetail from './productdetail';


const route = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/car',
        element: <Car />,
    },
    {
        path: '/hello',
        element: <Hello />,
    },
    {
        path: '/product',
        element: <Productlist />,
    },
    {
        path: '/product/:masp',
        element: <Productdetail />,
    },
    { path: '*', element: <div>Not found</div> },
]);
export default route;


