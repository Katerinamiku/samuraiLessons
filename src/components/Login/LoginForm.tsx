import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import style from './Login.module.scss';
import {requiredField} from "../../utilites/validators";
import s from '../Common/FormsControls/FormsControls.module.scss';
import {Button} from "../Common/Button/Button";
import {createField, InputCommon} from "../Common/FormsControls/TextAreaCommon";

export type FormDataType = {
    email: string | null
    password: string | null
    rememberMe: boolean
    captcha: string
}

const LoginForm = ({handleSubmit, error, captchaUrl}: InjectedFormProps<FormDataType, {captchaUrl:string | null}> & {captchaUrl:string | null}) => {
    return (
        <div className={style.formStyle}>
            <form onSubmit={handleSubmit}>
                {error && <div className={s.formGroupError}>
                    {error}
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
                {captchaUrl && <div className={style.captchaImg}>
                    <img src={captchaUrl} alt={'captcha'}/>
                </div>}
                {captchaUrl && <div className={style.captchaField}>
                    {createField('Symbols from image', 'captcha', [requiredField], InputCommon, {})}
                </div>}
            </form>
        </div>
    );
};


const LoginReduxForm = reduxForm<FormDataType, {captchaUrl:string | null}>({form: 'login'})(LoginForm);

export default LoginReduxForm;
