import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/reduxStore";
import {UsersType} from "../../Redux/reducers/UsersReducer";
import Friends from "./Friends";
import {setFriends} from "../../Redux/reducers/FriendsReducer";
import {usersAPI} from "../../API/api";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

//----------------------ClassCompContainer------------------------------
class FriendsContainer extends React.Component<FriendsPropsType> {

    componentDidMount() {
        usersAPI.getFriends()
            .then(data => {
            this.props.setFriends(data.items)
        });
    }
    render() {
        return <>
            <Friends friends={this.props.friends}/>
        </>
    }
}
//---------------------HOC-----------------------
//создаем HOC над ProfileContainer который будет делать редирект: конт комп над конт комп - и уже передаем крайний конт комп дальше в connect

//------------------connect----------------------
export type FriendsPropsType = MapStateToPropsType & DispatchToPropsType;
type MapStateToPropsType = {
    friends: Array<UsersType>
}
type DispatchToPropsType = {
    setFriends: (friends: Array<UsersType>) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        friends: state.friends.friends,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setFriends}),
    withAuthRedirect)(FriendsContainer);
