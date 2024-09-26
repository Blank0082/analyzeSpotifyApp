import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

const isDevelopment = process.env.NODE_ENV === 'development';

root.render(
    isDevelopment ? (
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    ) : (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
);

reportWebVitals();
