import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, setLogout} from "../../Redux/reducers/authReducer";
import {RootStateType} from "../../Redux/reduxStore";

const Logo = require('../img/logoS.jpg');

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
                       setLogout={this.props.setLogout}
        />
    }
}

type dispatchToPropsType = {
    getAuthUserData: () => void
    setLogout: () => void
}
type mapStateToPropsType = {
    isAuth: boolean
    login: string
}
export type HeaderPropsType = mapStateToPropsType & dispatchToPropsType;

const mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData, setLogout})(HeaderContainer);
