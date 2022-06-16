import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, RootStateType} from './Redux/State'


export const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>

        <App state={state} addPost={addPost} addMessage={addMessage}/>

        </React.StrictMode>,
        document.getElementById('root')
    );

}


