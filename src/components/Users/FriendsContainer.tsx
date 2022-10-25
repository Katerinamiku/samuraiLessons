import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/reduxStore";
import {UsersType} from "../../Redux/reducers/UsersReducer";
import Friends from "./Friends";
import {getFriends} from "../../Redux/reducers/FriendsReducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {getCurrentPage, getPageSize} from "../../Redux/reducers/usersSelectors";

//----------------------ClassCompContainer------------------------------
class FriendsContainer extends React.Component<FriendsPropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getFriends(currentPage, pageSize);
    }
    onPageChanged = (page: number) => {
        const {pageSize} = this.props;
        this.props.getFriends(page, pageSize);
    }
    render() {
        return <>
            <Friends friends={this.props.friends}
                     totalFriendsCount={this.props.totalFriendsCount}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     onPageChanged={this.onPageChanged}/>
        </>
    }
}
//---------------------HOC-----------------------
//создаем HOC над ProfileContainer который будет делать редирект: конт комп над конт комп - и уже передаем крайний конт комп дальше в connect

//------------------connect----------------------
export type FriendsPropsType = MapStateToPropsType & DispatchToPropsType;
type MapStateToPropsType = {
    friends: Array<UsersType>
    pageSize: number
    totalFriendsCount: number
    currentPage: number
}
type DispatchToPropsType = {
    getFriends: (currentPage: number, pageSize: number) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        friends: state.friends.friends,
        pageSize: state.friends.pageSize,
        totalFriendsCount: state.friends.totalFriendsCount,
        currentPage: state.friends.currentPage,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getFriends}),
    withAuthRedirect)(FriendsContainer);
