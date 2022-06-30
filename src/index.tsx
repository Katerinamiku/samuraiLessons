import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {RootStateType} from './Redux/State'

const renderTree = (state: RootStateType) => {
    ReactDOM.render(

        <App store={store}/>,

        document.getElementById('root')
    );
}

renderTree(store.getState())

store.subscribe(renderTree);
