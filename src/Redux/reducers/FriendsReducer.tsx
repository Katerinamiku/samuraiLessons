import {Dispatch} from "redux";
import {usersAPI} from "../../API/api";
import {setCurrentPage} from "./UsersReducer";

type setFriendsAT = {
    type: "SET_FRIENDS"
    friends: Array<UsersType>
}
type setTotalFriendsCountAT = {
    type: "SET_TOTAL_FRIENDS_COUNT"
    totalCount: number
}
export type FriendsActionsTypes =
    setFriendsAT
    | setTotalFriendsCountAT
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>;

export type LocationType = {
    city: string
    country: string
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
export type FriendsPageType = {
    friends: Array<UsersType>
    pageSize: number
    totalFriendsCount: number
    currentPage: number
}

export let initialState = {
    friends: [],
    pageSize: 8,
    totalFriendsCount: 0,
    currentPage: 1,
};

export const friendsReducer = (state: FriendsPageType = initialState, action: FriendsActionsTypes): FriendsPageType => {
    switch (action.type) {
        case "SET_FRIENDS":
            return {
                ...state, friends: [...action.friends]
            }
        case 'SET_TOTAL_FRIENDS_COUNT':
            return {...state, totalFriendsCount: action.totalCount}
        case 'FOLLOW':
            return {
                ...state, friends: state.friends.map(f => {
                    if (f.id === action.id) {
                        return {...f, followed: true}
                    }
                    return f;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state, friends: state.friends.map(f => {
                    if (f.id === action.id) {
                        return {...f, followed: false}
                    }
                    return f;
                })
            }
        default:
            return state;
    }
}

//action creators
export const setFriends = (friends: Array<UsersType>) => {
    return {
        type: "SET_FRIENDS",
        friends
    }
}
export const setTotalFriendsCount = (totalCount: number) => {
    return {
        type: 'SET_TOTAL_FRIENDS_COUNT',
        totalCount
    }
}
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
//Thunks

export const getFriends = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setCurrentPage(currentPage));
        usersAPI.getFriends(currentPage, pageSize)
            .then(data => {
                dispatch(setFriends(data.items));
                dispatch(setTotalFriendsCount(data.totalCount));
            });
    }
}
export const follow = (id: number) => {
    return (dispatch: Dispatch) => {
        usersAPI.setFollow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(id));
                }
            });
    }
}
export const unfollow = (id: number) => {
    return (dispatch: Dispatch) => {
        usersAPI.setUnfollow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(id));
                }
            });
    }
}
