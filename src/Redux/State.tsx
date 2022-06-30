import {v1} from "uuid";

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = UpdateNewPostTextActionType | AddMessageActionType | AddPostActionType

type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    messageText: string
}

//обьект с данными и методами, корорые с этими данными взаиможейситвуют
let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hi, how are you', likes: 12},
                {id: v1(), message: 'Its my first post', likes: 11},
                {id: v1(), message: 'blabla', likes: 11},
                {id: v1(), message: 'bebebe', likes: 11},
            ],
            newPostText: 'Cats are great!'
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
                {id: v1(), message: 'are'},
                {id: v1(), message: 'fine'},
                {id: v1(), message: 'Yo'},
            ],
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
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {id: v1(), message: this._state.profilePage.newPostText, likes: 0};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage: MessageType = {id: v1(), message: action.messageText}
            this._state.messagesPage.messages.push(newMessage);
            this._callSubscriber(this._state)
        }
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
}
export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

//функция которая изменяет стейт должна быть там где сам стейт


export default store
