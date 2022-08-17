import {connect} from "react-redux";
import {RootStateType} from "../../Redux/reduxStore";
import {
    follow,
    getUsers,
    setCurrentPage,
    unfollow,
    UsersType
} from "../../Redux/UsersReducer";
import React from "react";
import {Users} from "./Users";
import Preloader from "../Common/Preloader/Preloader";

//положили всю контейнерную логику в одни файл - конт комп. получилось 2 конт комп: одна connect другая классовая
class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.toggleIsFetching(true);
        //
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.setUsers(data.items);
        //         this.props.toggleIsFetching(false);
        //         this.props.setTotalCount(data.totalCount);
        //     }); - вместо сайд  запускаем thunk
    }

    onPageChanged = (page: number) => {
        this.props.getUsers(page, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
                   />
        </>
    }
}

//часть для connect
type mapStateToPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
type dispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setCurrentPage: (page: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
export type UsersPropsType = mapStateToPropsType & dispatchToPropsType;

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

//можно вместо mapDispatchtoprops сразу передать в connect обьект cо ссфлками на экшн криэйьеры
//а также можно переименовать экшн криэйторы без АС и тогда сократиться запись
// const dispatchToProps = (dispatch: Dispatch): dispatchToPropsType => {
//     return {
//         follow: (userId: string) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: string) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: Array<UsersType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (page: number) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         setTotalCount: (totalCount: number) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (value: boolean) => {
//             dispatch(toggleIsFetchingAC(value))
//         }
//     }
// }

export default connect(mapStateToProps,
    {
        follow, unfollow, setCurrentPage, getUsers
    })(UsersContainer);

