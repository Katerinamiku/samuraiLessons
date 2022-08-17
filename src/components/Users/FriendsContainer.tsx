import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/reduxStore";
import {UsersType} from "../../Redux/UsersReducer";
import Friends from "./Friends";
import {setFriends} from "../../Redux/FriendsReducer";
import {UsersPropsType} from "./UsersContainer";
import {usersAPI} from "../../API/api";



class FriendsContainer extends React.Component<FriendsPropsType> {

    componentDidMount() {
        usersAPI.getFriends()
            .then(data => {
            this.props.setFriends(data.items)
        });
    }

    render() {
        return <>
            <Friends friends={this.props.friends} />
        </>
    }
}

export type FriendsPropsType = MapStateToPropsType & DispatchToPropsType;

type MapStateToPropsType = {
    friends: Array<UsersType>
}
type DispatchToPropsType = {
    setFriends: (friends: Array<UsersType>) => void
}
//---------------------------------------------------------
const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        friends: state.friends.friends
    }
}


export default connect(mapStateToProps, {setFriends})(FriendsContainer);
