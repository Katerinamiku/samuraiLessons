import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {RootStateType} from "../../Redux/reduxStore";
import {connect} from "react-redux";
import {setUserProfile, UserProfileType} from "../../Redux/ProfilePageReducer";
import {withRouter, RouteComponentProps} from "react-router-dom";


//-------------TYPES--------------------------
type mapStateToPropsType = {
    profile: UserProfileType | null
}
type dispatchType = {
    setUserProfile: (profile: UserProfileType | null) => void
}
type withRouteType = {
    userId: string | undefined
}
type commonTypes = RouteComponentProps<withRouteType> & ProfilePageType;
export type ProfilePageType = mapStateToPropsType & dispatchType;


//----------------------ClassCompContainer------------------------------
class ProfileContainer extends React.Component<commonTypes> {
//делаем запросы на сервер с пом комп - сайд эффекты. этой ф нужна инфа от url, чтобы отобразить верную страницу.
// Поэтому прежде чем отдать ее connect обернем ее withRouterом

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         setUserProfile={this.props.setUserProfile}/>
            </div>
        )
    }
}

//---------------------withRouter-------------------------
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

//-----------------------connect----------------

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)
