import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {NavBar} from './components/NavBar/NavBar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StoreType} from "./Redux/State";


type PropsType ={
    store: StoreType
}
const App: React.FC<PropsType> = (props: PropsType) => {
 const state = props.store.getState();
    console.log('state',state)
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={
                            <Profile profilePage={state.profilePage}
                                     dispatch={props.store.dispatch.bind(props.store)}/>}/>
                        <Route path="/dialogs" element={
                            <Dialogs data={state.messagesPage}
                            dispatch={props.store.dispatch.bind(props.store)}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
