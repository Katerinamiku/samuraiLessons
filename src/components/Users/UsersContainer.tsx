import {connect} from "react-redux";
import {Users} from "./Users";
import {RootStateType} from "../../Redux/reduxStore";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../Redux/UsersReducer";

type mapStateToPropsType = {
    users: Array<UsersType>
}
type dispatchToPropsType = {
    follow: (userId: string)=>void
    unfollow: (userId: string)=>void
    setUsers: (users: Array<UsersType>) => void
}
export type UsersPropsType = mapStateToPropsType & dispatchToPropsType;

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {users: state.usersPage.users}
}
const dispatchToProps = (dispatch: Dispatch): dispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, dispatchToProps)(Users);



