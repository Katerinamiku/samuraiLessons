export type PostType = {
    id: number
    message: string
    likes: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
}
export type MessagesPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likes: 12},
            {id: 2, message: 'Its my first post', likes: 11},
            {id: 2, message: 'blabla', likes: 11},
            {id: 2, message: 'bebebe', likes: 11},
        ]
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Igor'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Valera'},
            {id: 5, name: 'Andrew'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'are'},
            {id: 3, message: 'fine'},
            {id: 4, message: 'Yo'},
        ],
    },

}
