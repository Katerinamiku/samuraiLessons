import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagesPageType} from "./../../Redux/State";
import TextArea from "./Textarea/TextArea";

type DataType = {
    data: MessagesPageType
    addMessage: (messageType: string)=> void
}

export const Dialogs = (props: DataType) => {

    let dialogsElements = props.data.dialogs.map(d=><DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.data.messages.map(m=><Message message={m.message} id={m.id}/> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div><TextArea addMessage={props.addMessage}/></div>
        </div>
    )
}
