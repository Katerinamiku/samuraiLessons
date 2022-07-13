import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {NavBar} from './components/NavBar/NavBar';
import {Profile} from './components/Profile/Profile';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


const App = () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/dialogs" element={<DialogsContainer/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>

    )
}

export default App;
