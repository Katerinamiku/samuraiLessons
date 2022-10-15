import React from "react";
import s from '../Dialogs.module.scss'

type MessageType = {
    message: string
    id: string
}

export const Message = (props:MessageType) => {

    return (
        <div className={s.message}>{props.message}</div>
    )
}
