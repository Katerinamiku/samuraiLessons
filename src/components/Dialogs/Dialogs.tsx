import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import { MessagesPageType} from "../../Redux/Store";
import TextArea from "./Textarea/TextArea";

type DataType = {
    data: MessagesPageType
    updateNewMessageText: (newMessage: string)=>void
    sendMessage: ()=> void
}

export const Dialogs = (props: DataType) => {

    let dialogsElements = props.data.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.data.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div><TextArea newMessageText={props.data.newMessageText}
                           updateNewMessageText={props.updateNewMessageText}
                           sendMessage={props.sendMessage}
            /></div>
        </div>
    )
}
