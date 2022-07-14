import {v1} from "uuid";

import {addPostAC, UpdateNewPostTextAC} from "./ProfilePageReducer";

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof UpdateNewPostTextAC>
    | ReturnType<typeof SendMessageAC>
    | ReturnType<typeof UpdateNewMessageTextAC>

export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type MessagesPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

let initialState = {
    dialogs: [
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Igor'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Valera'},
        {id: v1(), name: 'Andrew'},
    ],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'Super'},
        {id: v1(), message: 'Yo'},
    ],
    newMessageText: ''
}

const MessagesPageReducer = (state: MessagesPageType = initialState, action: ActionsTypes): MessagesPageType => {
    //делаем копию стейта и копиб только того массива который будет меняться: dialogs не надо, и не надо сами
    // обьекты Messages, так как все что мы здесь меняем - это добавляем новое в messages

    switch (action.type) {
        case 'SEND-MESSAGE': {
            const newMessage: MessageType = {id: v1(), message: state.newMessageText};
            return {...state, newMessageText: '',messages: [...state.messages, newMessage]}
        }
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            return {...state, newMessageText: action.newMessage};
        }
        default:
            return state;
    }
    return state;
}

export default MessagesPageReducer

export const SendMessageAC = () => {
    return {
        type: "SEND-MESSAGE",
    } as const
}

export const UpdateNewMessageTextAC = (newMessage: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newMessage: newMessage
    } as const
}
