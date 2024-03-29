import React from "react";
import "./App.scss";
import {NavBar} from './components/NavBar/NavBar';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {RootStateType} from "./Redux/reduxStore";
import {compose} from "redux";
import {initializeAppTC} from "./Redux/reducers/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import {withSuspense} from "./HOC/withSuspense";
import Error404 from "./components/Error404/Error404";
//Lazy imports
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const Music = React.lazy(() => import("./components/Music/Music"));
const FriendsContainer = React.lazy(() => import("./components/Users/FriendsContainer"));

class App extends React.Component<AppPropsType> {

    catchAllUnhandeledErrors = (promiseRejectionEvent: any) => {
        console.error(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeAppTC()
        window.addEventListener('unhandledrejection', this.catchAllUnhandeledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandeledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='appWrapper'>
                <HeaderContainer/>
                <div className={'appMain'}>
                    <NavBar/>
                    <div className={'appWrapperContent'}>
                        <Switch>
                            <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
                            <Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/>
                            <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                            <Route path={'/users'} render={() => <UsersContainer/>}/>
                            <Route path={'/music'} render={withSuspense(Music)}/>
                            <Route path={'/login'} render={() => <Login/>}/>
                            <Route path={'/friends'} render={withSuspense(FriendsContainer)}/>
                            <Route path={'*'} render={() => <Error404/>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

type dispatchToPropsType = {
    initializeAppTC: () => void
}
export type AppPropsType = ReturnType<typeof mapSateToProps> & dispatchToPropsType;

const mapSateToProps = (state: RootStateType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapSateToProps, {initializeAppTC}))(App);
