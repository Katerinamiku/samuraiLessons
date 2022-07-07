import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/reduxStore'
import {BrowserRouter} from "react-router-dom";



const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
            dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
            document.getElementById('root')
    );
}

renderTree()

store.subscribe(()=>renderTree());
