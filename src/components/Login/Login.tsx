import React from 'react';
import LoginReduxForm, {FormDataType} from "./LoginForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/reduxStore";
import {setLogin} from "../../Redux/reducers/authReducer";
import {Redirect} from "react-router-dom";
import s from './Login.module.scss';

type LoginCommonPropsType = mapStateToPropsType & dispatchType;

const Login = (props: LoginCommonPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.setLogin(formData)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={s.loginBlock}>
            <div>
                <h2>Login</h2>
                <div className={s.loginText}>
                    <div>To log in get registered
                        <a href={'https://social-network.samuraijs.com/'}
                           target={'_blank'} rel="noreferrer"> here
                        </a>
                    </div>
                     <div>or use test account data:
                    <br/><b>Email:</b> free@samuraijs.com
                    <b> Password:</b> free</div>
                </div>
            </div>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
};

type mapStateToPropsType = {
    formData: any
    isAuth: boolean
    captchaUrl: string | null
}
type dispatchType = {
    setLogin: (formData: FormDataType) => void
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        formData: state.form,
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default compose<any>(
    connect(mapStateToProps, {setLogin})
    (Login))
