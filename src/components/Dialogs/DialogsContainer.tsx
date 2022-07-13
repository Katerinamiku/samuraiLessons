import React from "react";
import {Dialogs} from "./Dialogs";
import {MessagesPageType, SendMessageAC, UpdateNewMessageTextAC} from "../../Redux/MessagesPageReducer";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/reduxStore";
import {Dispatch} from "redux";
//конткйнер может принимать все данные вскючая стор и передвать что нужно презентационной

 type MapStateToPropsType = {
     messagesPage: MessagesPageType
}

type DispatchToPropsType = {
    updateNewMessageText: (newMessage: string) =>void,
    sendMessage: () => void
}
//обькдиненный тип для всего Dialogs - передаем его в props
export type DialogsPropsType = MapStateToPropsType & DispatchToPropsType;

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {messagesPage: state.messagesPage}
}

const dispatchToProps = (dispatch: Dispatch): DispatchToPropsType => {
    return {
        updateNewMessageText: (newMessage: string) => {dispatch(UpdateNewMessageTextAC(newMessage))},
        sendMessage:() => {dispatch(SendMessageAC())}}
}


export const DialogsContainer = connect(mapStateToProps, dispatchToProps)(Dialogs);

