import React from 'react';
import LoginReduxForm, {FormDataType} from "./LoginForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {setLoginData} from "../../Redux/LoginReducer";
import {RootStateType} from "../../Redux/reduxStore";

type LoginCommonPropsType = mapStateToPropsType & dispatchType;

const Login = (props: LoginCommonPropsType) => {
    const onSubmit = (formData: FormDataType) => {
      props.setLoginData(formData)
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
}
type dispatchType = {
    setLoginData: (formData: FormDataType) => void
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        formData: state.form
    }
}

export default compose<any>(
    connect(mapStateToProps, {setLoginData})
(Login))
