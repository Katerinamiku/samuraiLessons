import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {NewMessageFormPropsType} from "../Dialogs";
import {TextareaCommon} from "../../Common/FormsControls/TextareaCommon";
import {maxLengthCreator, requiredField} from "../../../utilites/validators";
import {Button} from "../../Common/Button/Button";
import s from '../Dialogs.module.scss';
const max30 = maxLengthCreator(30)
const TextArea: React.FC<InjectedFormProps<NewMessageFormPropsType>> = (props) => {

    return (
        <div >
            <form onSubmit={props.handleSubmit} className={s.messageForm}>
                <div>
                    <Field component={TextareaCommon}
                           name={'newMessageBody'}
                           placeholder={'Enter your message'}
                           validate={[requiredField, max30]}/>
                </div>
                <Button name={'Send'} callBack={()=>{}}  size={'large'}/>
            </form>
        </div>
    );
};

const TextAreaFromRedux = reduxForm<NewMessageFormPropsType>({form: 'dialogAddMessageForm'})(TextArea)

export default TextAreaFromRedux;

