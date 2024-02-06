import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import{ChainId, ThirdwebProvider} from '@thirdweb-dev/react';
import { StateContextProvider } from './context';
import { Mumbai } from "@thirdweb-dev/chains";

import App from './App';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider activeChain={Mumbai} clientId="803a0919a7889460400cb5aabfcd2ba9" >
        <Router>
            <StateContextProvider>
            <App />
            </StateContextProvider>
        </Router>

    </ThirdwebProvider>
)