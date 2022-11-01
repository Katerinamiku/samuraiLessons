import React from 'react';
import s from './FormsControls.module.scss';
import {Field} from "redux-form";
import {FieldValidatorType} from "../../../utilites/validators";


export const TextAreaCommon = ({input, meta, ...props}: any) => {
    const haseError = meta.touched && meta.error
    return (
        <div>
            {haseError && <span className={s.errorText}>{meta.error}</span>}
            <div>
                {/*@ts-ignore*/}
                <textarea className={haseError ? s.error : s.formControl} {...input} {...props}/>
            </div>
        </div>
    );
};


export const InputCommon = ({input, meta, ...props}: any) => {
    const haseError = meta.touched && meta.error
    return (
        <div>
            {haseError && <span className={s.errorText}>{meta.error}</span>}
            <div>
                {/*@ts-ignore*/}
                <input className={haseError ? s.error : s.formControl} {...input} {...props}/>
            </div>
        </div>
    );
};
export const createField = (placeholder: string | undefined, name: string, validators: FieldValidatorType[], component: any, props = {}, text = '') => {

    return (
        <div>
            <Field placeholder={placeholder}
                   name={name}
                   validate={validators}
                   component={component}
                   {...props}
            /> {text}
        </div>
    );
};
