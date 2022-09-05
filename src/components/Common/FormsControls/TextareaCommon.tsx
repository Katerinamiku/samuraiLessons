import React from 'react';
import s from './TextAreaCommon.module.css';

export const TextareaCommon = ({ input, meta, ...props}: any) => {
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


export const InputCommon = ({ input, meta, ...props}: any) => {
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
