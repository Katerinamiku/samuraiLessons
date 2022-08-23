import React from "react";
import {Dialogs} from "./Dialogs";
import {MessagesPageType, SendMessageAC, UpdateNewMessageTextAC} from "../../Redux/MessagesPageReducer";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/reduxStore";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

//-------------------------HOC----------------------
//создаем HOC над Dialogs который будет делать редирект: конт комп над конт комп - и уже передаем крайний конт комп дальше в connect


//-----------------------connect----------------------
//конткйнер может принимать все данные вскючая стор и передвать что нужно презентационной
type MapStateToPropsType = {
    messagesPage: MessagesPageType
}
type DispatchToPropsType = {
    updateNewMessageText: (newMessage: string) => void,
    sendMessage: () => void
}
export type DialogsPropsType = MapStateToPropsType & DispatchToPropsType;

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        messagesPage: state.messagesPage,
    }
}
const dispatchToProps = (dispatch: Dispatch): DispatchToPropsType => {
    return {
        updateNewMessageText: (newMessage: string) => {
            dispatch(UpdateNewMessageTextAC(newMessage))
        },
        sendMessage: () => {
            dispatch(SendMessageAC())
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, dispatchToProps), withAuthRedirect) (Dialogs)

