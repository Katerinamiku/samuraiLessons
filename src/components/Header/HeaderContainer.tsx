import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../Redux/authReducer";
import {RootStateType} from "../../Redux/reduxStore";

const Logo = require('../img/logoS.jpg');

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
        />
    }
}

type dispatchToPropsType = {
    getAuthUserData: () => void
}
type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
export type HeaderPropsType = mapStateToPropsType & dispatchToPropsType;

const mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);
