import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./Redux/reduxStore";

    ReactDOM.render(
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    );





