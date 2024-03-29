import React from "react";
import s from './Dialogs.module.scss'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import TextAreaFromRedux from "./Textarea/TextArea";

export type NewMessageFormPropsType = {
    newMessageBody: string
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = props.messagesPage.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>)

    const addNewMessage = (formData: NewMessageFormPropsType) => {
        props.sendMessage(formData.newMessageBody)
        formData.newMessageBody = '';
    }

    return (
        <div className={s.dialogs}>
            <div className={s.friendsBlock}>
                {dialogsElements}
            </div>
            <div className={s.messageBlock}>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <div className={s.messageInput}><TextAreaFromRedux onSubmit={addNewMessage}/></div>
            </div>

        </div>
    )
}
