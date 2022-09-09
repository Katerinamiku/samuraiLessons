import {usersAPI} from "../../API/api";
import {Dispatch} from "redux";

export type UsersReducerActionsTypes =  ReturnType<typeof followSuccess> | ReturnType<typeof unfollowSuccess> |ReturnType<typeof setUsers> |ReturnType<typeof setCurrentPage> |ReturnType<typeof setTotalCount> |ReturnType<typeof toggleIsFetching> |ReturnType<typeof toggleFollowingInProgress>

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
export const UsersReducer = (state: UsersPageType = initialState, action: UsersReducerActionsTypes): UsersPageType => {
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
            return {
                ...state,
                followingInProgress: action.value ? [...state.followingInProgress, action.id] : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state;
    }
    return state;
}

//action creators
export const followSuccess = (id: number) => {
    return {
        type: 'FOLLOW',
        id
    } as const
}
export const unfollowSuccess = (id: number) => {
    return {
        type: 'UNFOLLOW',
        id
    } as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}
export const setCurrentPage = (page: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        page
    } as const
}
export const setTotalCount = (totalCount: number) => {
    return {
        type: 'SET_TOTAL_COUNT',
        totalCount
    } as const
}
export const toggleIsFetching = (value: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        value
    } as const
}
export const toggleFollowingInProgress = (value: boolean, id: number) => {
    return {
        type: 'TOGGLE_FOLLOWING_IN_PROGRESS',
        value,
        id
    } as const
}


//Thunks
export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items));
                dispatch(toggleIsFetching(false));
                dispatch(setTotalCount(data.totalCount));
            });
    }
}
export const follow = (id: number) => {
    return (dispatch: Dispatch) => {
       dispatch(toggleFollowingInProgress(true, id));
        usersAPI.setFollow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(id));
                }
              dispatch(toggleFollowingInProgress(false, id));
            });
    }
}
export const unfollow = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
        usersAPI.setUnfollow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(id));
                }
                dispatch(toggleFollowingInProgress(false, id));
            });
    }
}
