import React from 'react';
import LoginReduxForm, {FormDataType} from "./LoginForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/reduxStore";
import {setLogin} from "../../Redux/reducers/authReducer";
import {Redirect} from "react-router-dom";

type LoginCommonPropsType = mapStateToPropsType & dispatchType;

const Login = (props: LoginCommonPropsType) => {
    const onSubmit = (formData: FormDataType) => {
      props.setLogin(formData)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

type mapStateToPropsType = {
    formData: any
    isAuth: boolean
}
type dispatchType = {
    setLogin: (formData: FormDataType) => void
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        formData: state.form,
        isAuth: state.auth.isAuth
    }
}

export default compose<any>(
    connect(mapStateToProps, {setLogin})
(Login))
