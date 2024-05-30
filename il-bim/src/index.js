import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import App from './App'

import newpostReducer from './component/redux/newpost/newpostSlice'

const rootReducer = combineReducers({
    newpostData: newpostReducer,
})

const store = configureStore({
    reducer: rootReducer
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
reportWebVitals();


