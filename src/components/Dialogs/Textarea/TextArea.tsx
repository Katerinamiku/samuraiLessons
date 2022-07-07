import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from './../Dialogs.module.css'

type textareaPropsType = {
    newMessageText: string
    updateNewMessageText: (newMessage: string)=>void
    sendMessage: ()=>void
}

const TextArea = (props: textareaPropsType) => {

    let [error, setError] = useState<string>('')

    const NewMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.currentTarget.value;
        props.updateNewMessageText(newMessage)
    }

    const sendMessageHandler = () => {
        if (props.newMessageText !== '') {
            props.sendMessage()
        } else {
            setError('Text is required!')
        }
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            sendMessageHandler();
        }
    }

    return (
        <div>
            <div>
            <textarea placeholder={'Enter your message'}
                      value={props.newMessageText}
                      onChange={NewMessageTextHandler}
                      onKeyPress={onKeyPressHandler}
                      className={error ? s.error : ''}
            ></textarea>
            </div>
            <button onClick={sendMessageHandler}>Send</button>
            {error && <div className={s.errorMessage}>{error}</div>}
        </div>
    );
};

export default TextArea;

