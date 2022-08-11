
type followAT = {
    type: 'FOLLOW'
    id: number
}
type unfollowAT = {
    type: 'UNFOLLOW'
    id: number
}
type setUsersAT = {
    type: 'SET_USERS'
    users: Array<UsersType>
}
type setCurrentPageAT = {
    type: 'SET_CURRENT_PAGE'
    page: number
}
type setTotalCountAT = {
    type: 'SET_TOTAL_COUNT',
    totalCount: number
}
type toggleIsFetchingAT = {
    type: 'TOGGLE_IS_FETCHING'
    value: boolean
}
type toggleFollowingInProgressAT = {
    type: 'TOGGLE_FOLLOWING_IN_PROGRESS'
    value: boolean
    id: number
}

export type ActionsTypes = followAT | unfollowAT | setUsersAT | setCurrentPageAT | setTotalCountAT | toggleIsFetchingAT | toggleFollowingInProgressAT

export type LocationType = {
    city: string
    country: string
}
export type UsersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
export type PhotosType = {
    small: string
    large: string
}
export type UsersType = {
    id: number;
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
    isFetching: false,
    followingInProgress: []
};
//в редьюсере копируем глубоко только то что меняем
export const UsersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case 'SET_USERS':
            return {...state, users: [...action.users]}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.page}
        case 'SET_TOTAL_COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.value}
        case 'TOGGLE_FOLLOWING_IN_PROGRESS':
            return {...state,
                followingInProgress: action.value ? [...state.followingInProgress, action.id] : state.followingInProgress.filter(id => id !== action.id)}
        default:
            return state;
    }
    return state;
}

//action creators
export const follow = (id: number): followAT => {
    return {
        type: 'FOLLOW',
        id
    }
}
export const unfollow = (id: number): unfollowAT => {
    return {
        type: 'UNFOLLOW',
        id
    }
}
export const setUsers = (users: Array<UsersType>): setUsersAT => {
    return {
        type: 'SET_USERS',
        users
    }
}
export const setCurrentPage = (page: number): setCurrentPageAT => {
    return {
        type: 'SET_CURRENT_PAGE',
        page
    }
}
export const setTotalCount = (totalCount: number): setTotalCountAT => {
    return {
        type: 'SET_TOTAL_COUNT',
        totalCount
    }
}
export const toggleIsFetching = (value: boolean): toggleIsFetchingAT => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        value
    }
}
export const toggleFollowingInProgress = (value: boolean, id: number):toggleFollowingInProgressAT => {
    return {
        type: 'TOGGLE_FOLLOWING_IN_PROGRESS',
        value,
        id
    }
}
