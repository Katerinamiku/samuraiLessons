import {RootStateType} from "../reduxStore";

export const getUsersState =  (state: RootStateType) => {
    return state.usersPage.users
}
export const getPageSize =  (state: RootStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount =  (state: RootStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage =  (state: RootStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching =  (state: RootStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress =  (state: RootStateType) => {
    return state.usersPage.followingInProgress
}
