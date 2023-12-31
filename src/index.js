// import libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
// import components
import App from './app.jsx';


// Retrieving the tag to insert the application
const root = ReactDOM.createRoot(document.getElementById('root'));
// Add components to tag
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
