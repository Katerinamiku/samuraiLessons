import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import style from './Login.module.scss';
import {requiredField} from "../../utilites/validators";
import s from './../Common/FormsControls/TextAreaCommon.module.css';
import {Button} from "../../common/Components/Button";

export type FormDataType = {
    email: string | null
    password: string | null
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <div className={style.formStyle}>
            <form onSubmit={props.handleSubmit}>
                {props.error && <div className={s.formGroupError}>
                    {props.error}
                </div>}
                <div>
                    <Field placeholder={'Email'}
                           component={'input'}
                           name={'email'}
                           validate={[requiredField]}/>
                </div>
                <div>
                    <Field placeholder={'Password'}
                           component={'input'}
                           name={'password'}
                           type="password"
                           validate={[requiredField]}/>
                </div>
                <div>
                    <Field type={'checkbox'}
                           component={'input'}
                           name={'rememberMe'}/> remember me
                </div>
                <div>
                    <Button name={'Log in'} callBack={()=>{
                        }}  size={'large'}/>
                </div>
            </form>
        </div>
    );
};


const LoginReduxForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm)

export default LoginReduxForm;
