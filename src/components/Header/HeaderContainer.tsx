import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthMeType, setAuthUserData} from "../../Redux/authReducer";
import {RootStateType} from "../../Redux/reduxStore";

const Logo = require('../img/logoS.jpg');

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data)
                }
            });
    }

    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
                       setAuthUserData={this.props.setAuthUserData}
        />
    }
}

type dispatchToPropsType = {
    setAuthUserData: (data: AuthMeType) => void
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
