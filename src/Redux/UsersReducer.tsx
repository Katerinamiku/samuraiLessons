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
type setCurrentPage = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
type setTotalCount = {
    type: 'SET_TOTAL_COUNT',
    totalCount: number
}

export type ActionsTypes = followACType | unfollowACType | setUsersACType | setCurrentPage | setTotalCount

export type LocationType = {
    city: string
    country: string
}
export type UsersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type PhotosType = {
    small: string
    large: string
}

export type UsersType = {
    id: string;
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location?: LocationType
}

export let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
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
            return {...state, users: [...action.users]}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET_TOTAL_COUNT':
            return {...state, totalUsersCount: action.totalCount}
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
export const setCurrentPageAC = (page: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        page
    }
}
export const setTotalCountAC = (totalCount: number) => {
    return {
        type: 'SET_TOTAL_COUNT',
        totalCount
    }
}
