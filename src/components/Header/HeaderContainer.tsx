import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {setLogout} from "../../Redux/reducers/authReducer";
import {RootStateType} from "../../Redux/reduxStore";


class HeaderContainer extends React.Component<HeaderPropsType> {

    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
                       setLogout={this.props.setLogout}
        />
    }
}

type dispatchToPropsType = {
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

export default connect(mapStateToProps, {setLogout})(HeaderContainer);
