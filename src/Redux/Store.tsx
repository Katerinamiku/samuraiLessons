import {v1} from "uuid";
import ProfilePageReducer, {addPostAC, UpdateNewPostTextAC} from "./ProfilePageReducer";
import MessagesPageReducer, {SendMessageAC, UpdateNewMessageTextAC} from "./MessagesPageReducer";

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof UpdateNewPostTextAC> | ReturnType<typeof SendMessageAC> |ReturnType<typeof UpdateNewMessageTextAC>


//обьект с данными и методами, корорые с этими данными взаимодейситвуют
let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hi, how are you', likes: 12},
                {id: v1(), message: 'Its my first post', likes: 11},
                {id: v1(), message: 'blabla', likes: 11},
                {id: v1(), message: 'bebebe', likes: 11},
            ],
            newPostText: ' '
        },
        messagesPage: {
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
        },
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = ProfilePageReducer(this._state.profilePage, action); //делегировали решение редюсерам
        this._state.messagesPage = MessagesPageReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state); //обновили стэйт
    }
}

export type PostType = {
    id: string
    message: string
    likes: number
}
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type MessagesPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

//функция которая изменяет стейт должна быть там где сам стейт


export default store
