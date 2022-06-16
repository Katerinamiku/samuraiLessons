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
import {RootStateType} from "./Redux/State";

type StateType ={
    state: RootStateType
    addPost: (postText: string)=> void
    addMessage: (messageType: string)=> void
}
const App = (props: StateType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={
                            <Profile data={props.state.profilePage}
                                     addPost={props.addPost}/>}/>
                        <Route path="/dialogs" element={
                            <Dialogs data={props.state.messagesPage}
                            addMessage={props.addMessage}/>}/>
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
