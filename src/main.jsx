import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { Auth0Provider } from '@auth0/auth0-react';
import { FiltersProvider } from '@/context/filters';
// import { Auth0Provider } from 'node_modules/@auth0/auth0-react/dist/auth0-provider.js';
import './index.css';

const domain   = import.meta.env.VITE_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;

const router = createBrowserRouter([
    { 
        element : <App />,
        children : [
            { 
                path    : '/home',
                element : <Home />
            },
            { 
                path    : '/',
                element : <Login />
            },
        ]
    }
]);

console.log('domain', domain);
console.log('clientId', clientId);

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    //     {/* <Auth0Provider
    //         domain      = { domain }
    //         clientId    = { clientId }
    //         authorizationParams={{
    //             redirect_uri: window.location.origin
    //         }}
    //     >
    //         <RouterProvider router = { router }/>
    //     </Auth0Provider> */}
    //     <RouterProvider router = { router }/>
    // </React.StrictMode>

    <FiltersProvider>
        <RouterProvider router = { router }/>
    </FiltersProvider>
)
