// Externals
import React from 'react';
import ReactDOM from 'react-dom';
// Internals
import AppProvider from './components/contexts/AppProvider';
import App from './components/Layout';
// Theming & Styling
import './main.css';

/* ==========================================================================
   Client side rendering
   ========================================================================== */

const rootElement = document.getElementById('app-container');

const renderApp = (Component) => {
    ReactDOM.render(
        <AppProvider>
            <Component />
        </AppProvider>,
        rootElement,
    );
}

renderApp(App);
