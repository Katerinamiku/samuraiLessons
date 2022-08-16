import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import TextArea from "./Textarea/TextArea";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";


export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = props.messagesPage.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>)

    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div><TextArea newMessageText={props.messagesPage.newMessageText}
                           updateNewMessageText={props.updateNewMessageText}
                           sendMessage={props.sendMessage}
            /></div>
        </div>
    )
}
