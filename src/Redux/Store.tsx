import {v1} from "uuid";
import ProfilePageReducer, {addPostAC, UpdateNewPostTextAC} from "./ProfilePageReducer";
import MessagesPageReducer, {SendMessageAC, UpdateNewMessageTextAC} from "./MessagesPageReducer";
 type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof UpdateNewPostTextAC> | ReturnType<typeof SendMessageAC> |ReturnType<typeof UpdateNewMessageTextAC>


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
            newPostText: ' ',
            profile: null,
            status: ''
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

 type PostType = {
    id: string
    message: string
    likes: number
}
 type DialogType = {
    id: string
    name: string
}
 type MessageType = {
    id: string
    message: string
}
 type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
     profile: any
     status: string
}
 type MessagesPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
 type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

//функция которая изменяет стейт должна быть там где сам стейт


export default store
