import {v1} from "uuid";
import {profileAPI, usersAPI} from "../../API/api";
import {AppThunkType} from "../reduxStore";

//------------Types-------------
export type ProfilePageActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>

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
    profile: UserProfileType | null
    status: string
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
    profile: null,
    status: 'Write something'
}

//в редьюсере копируем глубоко только то что меняем
export const ProfilePageReducer = (state: ProfilePageType = initialState, action: ProfilePageActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {id: v1(), message: action.NewPostText, likes: 0};
            return {...state, posts: [...state.posts, newPost]};
        }
        case 'SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SET_STATUS': {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
    return state;
}

export default ProfilePageReducer

//-------------AC--------------
export const addPostAC = (NewPostText: string) => {
    return {
        type: "ADD-POST",
        NewPostText
    } as const
}
export const setUserProfile = (profile: UserProfileType | null) => {
    return {
        type: "SET_USER_PROFILE",
        profile
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: "SET_STATUS",
        status
    } as const
}
//---------Thunk--------------
export const getUserProfileInfo = (id: number): AppThunkType => {
    return (dispatch) => {
        usersAPI.getUserProfileInfo(id)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}
export const getStatus = (id: number): AppThunkType => {
    return (dispatch) => {
        profileAPI.getStatus(id)
            .then(response => {
                dispatch(setStatus(response.data));
            });
    }
}
export const updateStatus = (status: string): AppThunkType => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            });
    }
}
