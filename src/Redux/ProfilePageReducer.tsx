import {v1} from "uuid";
import {SendMessageAC, UpdateNewMessageTextAC} from "./MessagesPageReducer";
import {Dispatch} from "redux";
import {usersAPI} from "../API/api";

//------------Types-------------
export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof UpdateNewPostTextAC>
    | ReturnType<typeof SendMessageAC>
    | ReturnType<typeof UpdateNewMessageTextAC>
    | ReturnType<typeof setUserProfile>

type ContactsType = {
    facebook: string | null
    github: string | null
    instagram: string | null
    mainLink: string | null
    twitter: string | null
    vk: string | null
    website: string | null
    youtube: string | null
}
type UserPhotosType = {
    small: string
    large: string
}
export type UserProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: UserPhotosType
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: UserProfileType | null
}
export type PostType = {
    id: string
    message: string
    likes: number
}
//----------------------------------------------------------------
export let initialState = {
    posts: [
        {id: v1(), message: 'Hi, how are you', likes: 12},
        {id: v1(), message: 'Its my first post', likes: 11},
        {id: v1(), message: 'blabla', likes: 11},
        {id: v1(), message: 'bebebe', likes: 11},
    ],
    newPostText: ' ',
    profile: null
}

//в редьюсере копируем глубоко только то что меняем
export const ProfilePageReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {id: v1(), message: state.newPostText, likes: 0};
            return {...state, newPostText: '', posts: [...state.posts, newPost]};
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.newText}
        }
        case 'SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
    return state;
}

export default ProfilePageReducer

//-------------AC--------------
export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}

export const UpdateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}
export const setUserProfile = (profile: UserProfileType | null) => {
    return {
        type: "SET_USER_PROFILE",
        profile
    } as const
}
//---------Thunk--------------
export const getUserProfileInfo = (id: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getUserProfileInfo(id)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}
