import {v1} from "uuid";
import {profileAPI, usersAPI} from "../../API/api";
import {AppThunkType} from "../reduxStore";
import {stopSubmit} from "redux-form";

//------------Types-------------
export type ProfilePageActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof savePhotoSuccess>

export type ContactsType = {
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
    profile: UserProfileType
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
        {id: v1(), message: 'Its my first post', likes: 11},
        {id: v1(), message: 'Not real post', likes: 14},
        {id: v1(), message: 'Studying React', likes: 6},
    ],
    profile: {
        aboutMe: '',
        contacts: { } as ContactsType,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: NaN,
        photos: {
            small: '',
            large: ''
        },
    },
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
        case 'SAVE_PHOTO_SUCCESS': {
            return {...state, profile: {...state.profile, photos: action.photos}}
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
export const setUserProfile = (profile: UserProfileType ) => {
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
export const savePhotoSuccess = (photos: UserPhotosType) => {
    return {
        type: "SAVE_PHOTO_SUCCESS",
        photos
    } as const
}
// export const savePhrofileData = (profile: UserProfileType) => {
//     return {
//         type: "SAVE_PHOTO_SUCCESS",
//         photos
//     } as const
// }
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
export const savePhoto = (photoFile: File): AppThunkType => {
    return (dispatch) => {
        profileAPI.downloadPhoto(photoFile)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(savePhotoSuccess(response.data.data.photos))
                }
            });
    }
}
export const saveProfileData = (formData: UserProfileType): AppThunkType => {
    return async (dispatch, getState) => {
        const userId = getState().auth.id || 'unknown';
        let response = await profileAPI.uploadProfileData(formData);
                if (response.data.resultCode === 0) {
                    dispatch(getUserProfileInfo(+userId))
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                    dispatch(stopSubmit('editProfile', {_error: message}));
                    return Promise.reject();
                }
    }
}
