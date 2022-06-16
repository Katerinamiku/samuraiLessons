import {v1} from "uuid";
import {renderTree} from "../render";

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
            {id: v1(), message: 'Hi, how are you', likes: 12},
            {id: v1(), message: 'Its my first post', likes: 11},
            {id: v1(), message: 'blabla', likes: 11},
            {id: v1(), message: 'bebebe', likes: 11},
        ]
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
}

export const addPost = (postText: string) => {
    const newPost: PostType = {id: v1(), message: postText, likes: 0};
   state.profilePage.posts.push(newPost);
   renderTree(state)
} //функция которая изменяет стейт должна быть там где сам стейт

export const addMessage = (messageText: string) => {
  const newMessage: MessageType = {id: v1(), message: messageText}
    state.messagesPage.messages.push(newMessage);
    renderTree(state)
}
