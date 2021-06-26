import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { ContextProvider } from './utility/socketContext'

import './index.scss'

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>
    , document.getElementById('app'))