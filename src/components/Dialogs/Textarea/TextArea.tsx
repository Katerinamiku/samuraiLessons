import React, {KeyboardEvent, useState} from "react";
import s from './../Dialogs.module.css'

type textareaPropsType = {
    addMessage: (messageType: string) => void
}

const TextArea = (props: textareaPropsType) => {

    let [error, setError] = useState<string | null>('')

    const addedMessageRef = React.createRef<HTMLTextAreaElement>();

    const addMessage = () => {
        if (addedMessageRef.current) {
            props.addMessage(addedMessageRef.current.value.trim())
            addedMessageRef.current.value = ''
        } else {
            setError('Text is required!')
        }
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            addMessage();
        }
    }

    return (
        <div>
            <div>
            <textarea ref={addedMessageRef}
                      onKeyPress={onKeyPressHandler}
                      className={error ? s.error : ''}
            ></textarea>
            </div>
            <button onClick={addMessage}>Add Message</button>
            {error && <div className={s.errorMessage}>{error}</div>}
        </div>
    );
};

export default TextArea;

