import {v1} from "uuid";


export type MessagesPageActionsTypes =  ReturnType<typeof SendMessageAC>

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
    ]
}

const MessagesPageReducer = (state: MessagesPageType = initialState, action: MessagesPageActionsTypes): MessagesPageType => {
    //делаем копию стейта и копиб только того массива который будет меняться: dialogs не надо, и не надо сами
    // обьекты Messages, так как все что мы здесь меняем - это добавляем новое в messages

    switch (action.type) {
        case 'SEND-MESSAGE': {
            const newMessage: MessageType = {id: v1(), message: action.newMessageBody};
            return {...state, messages: [...state.messages, newMessage]}
        }
        default:
            return state;
    }
    return state;
}

export default MessagesPageReducer

export const SendMessageAC = (newMessageBody: string) => {
    return {
        type: "SEND-MESSAGE",
        newMessageBody
    } as const
}
