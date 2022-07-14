import {v1} from "uuid";
import {SendMessageAC, UpdateNewMessageTextAC} from "./MessagesPageReducer";

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof UpdateNewPostTextAC> | ReturnType<typeof SendMessageAC> |ReturnType<typeof UpdateNewMessageTextAC>

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type PostType = {
    id: string
    message: string
    likes: number
}
export let initialState = {
    posts: [
        {id: v1(), message: 'Hi, how are you', likes: 12},
        {id: v1(), message: 'Its my first post', likes: 11},
        {id: v1(), message: 'blabla', likes: 11},
        {id: v1(), message: 'bebebe', likes: 11},
    ],
    newPostText: ' '
}
//в редьюсере копируем глубоко только то что меняем
export const ProfilePageReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch(action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {id: v1(), message: state.newPostText, likes: 0};
            return {...state, newPostText: '', posts: [...state.posts, newPost]};
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.newText}
        }
        default:
            return state;
    }
    return state;
}

export default ProfilePageReducer


export const  addPostAC = () => {
    return  {
        type: "ADD-POST"
    } as const
}

export const UpdateNewPostTextAC = (newText: string) => {
    return  {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}
