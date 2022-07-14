import {v1} from "uuid";

type followACType = {
    type: 'FOLLOW'
    userId: string
}
type unfollowACType = {
    type: 'UNFOLLOW'
    userId: string
}
type setUsersACType = {
    type: 'SET_USERS'
    users: Array<UsersType>
}

export type ActionsTypes = followACType | unfollowACType | setUsersACType

export type LocationType = {
    city: string
    country: string
}
export type UsersPageType = {
    users: Array<UsersType>
}
export type UsersType = {
    id: string;
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export let initialState = {
    users: [ ],
};
//в редьюсере копируем глубоко только то что меняем
export const UsersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
    return state;
}

//action creators
export const followAC = (userId: string) => {
    return {
        type: 'FOLLOW',
        userId
    }
}
export const unfollowAC = (userId: string) => {
    return {
        type: 'UNFOLLOW',
        userId
    }
}
export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: 'SET_USERS',
        users
    }
}
