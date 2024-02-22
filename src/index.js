import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import backgroundImage from './Components/Img/bkg.jpg';

// Directly set the background style on the body element
document.body.style.backgroundImage = `url(${backgroundImage})`;
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundAttachment = 'fixed';
document.body.style.width = '100%';
document.body.style.height = '100%';
document.body.style.overflowX = 'hidden';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
