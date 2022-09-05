import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {NewMessageFormPropsType} from "../Dialogs";
import {TextareaCommon} from "../../Common/FormsControls/TextareaCommon";
import {maxLengthCreator, requiredField} from "../../../utilites/validators";

const max30 = maxLengthCreator(30)
const TextArea: React.FC<InjectedFormProps<NewMessageFormPropsType>> = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={TextareaCommon}
                           name={'newMessageBody'}
                           placeholder={'Enter your message'}
                           validate={[requiredField, max30]}/>
                </div>
                <button>Send</button>
            </form>
        </div>
    );
};

const TextAreaFromRedux = reduxForm<NewMessageFormPropsType>({form: 'dialogAddMessageForm'})(TextArea)

export default TextAreaFromRedux;

