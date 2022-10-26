import React from 'react';
import s from './Button.module.scss';

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled?: boolean
    size: string
}

export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }
    const btnSize = props.size === 'large' ? s.btn : s.btnSmall;
    const unfollowClass = props.name === 'Unfollow' ? s.unfollow : '';
    return (
            <button className={` ${btnSize} ${unfollowClass}`} onClick={onClickButtonHandler} disabled={props.disabled}>{props.name}</button>
    )
}
