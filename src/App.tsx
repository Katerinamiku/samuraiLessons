import React from "react";
import "./App.css";
import {NavBar} from './components/NavBar/NavBar';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Redirect, Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import FriendsContainer from "./components/Users/FriendsContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {RootStateType} from "./Redux/reduxStore";
import {compose} from "redux";
import {initializeAppTC} from "./Redux/reducers/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";


class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <Route path={'/friends'} render={() => <FriendsContainer/>}/>
                </div>
            </div>
        )
    }
}

type dispatchToPropsType = {
    initializeAppTC: () => void
}
export type AppPropsType = ReturnType<typeof mapSateToProps> & dispatchToPropsType;

const mapSateToProps = (state:RootStateType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapSateToProps, {initializeAppTC}))(App);
