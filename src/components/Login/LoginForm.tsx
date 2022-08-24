import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type FormDataType = {
    email: string | null
    password: string | null
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Email'} component={'input'} name={'email'}/>
                </div>
                <div>
                    <Field placeholder={'Password'} component={'input'} name={'password'}/>
                </div>
                <div>
                    <Field type={'checkbox'} component={'input'} name={'rememberMe'}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};


const LoginReduxForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm)

export default LoginReduxForm;
