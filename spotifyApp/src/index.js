import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

const isHashRouter = process.env.REACT_APP_HASH_ROUTER === 'true';
const BrowserBasename = process.env.REACT_APP_BROWSER_ROUTER_BASENAME;
const Router = isHashRouter ? HashRouter : BrowserRouter;

root.render(
    isHashRouter ? (
        <React.StrictMode>
            <Router>
                <App />
            </Router>
        </React.StrictMode>
    ) : (
        <React.StrictMode>
            <Router basename={BrowserBasename}>
                <App />
            </Router>
        </React.StrictMode>
    )
);

reportWebVitals();
