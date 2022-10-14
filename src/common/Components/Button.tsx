import React from 'react';
import s from './Button.module.scss';

type ButtonPropsType = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }
    return (
            <button className={s.btn} onClick={onClickButtonHandler}>{props.name}</button>
    )
}
