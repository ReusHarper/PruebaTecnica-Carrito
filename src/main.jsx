import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '@/pages/Home/Home.jsx';
import Login from '@/pages/Login/Login.jsx';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
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

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Auth0Provider
            domain              = { domain }
            clientId            = { clientId }
            authorizationParams = {{
                redirect_uri: window.location.origin
            }}
            onRedirectCallback = { appState => {
                const redirectTo = appState?.returnTo || '/home';
                router.navigate(redirectTo);
            }}
        >
            <RouterProvider router = { router }/>
        </Auth0Provider>
    </React.StrictMode>
)
