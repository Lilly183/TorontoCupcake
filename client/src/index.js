import React from 'react';
import ReactDOM from 'react-dom/client';
import Context from './context/Context'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Context>
        <App/>
    </Context>
);