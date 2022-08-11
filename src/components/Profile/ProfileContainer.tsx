import React from 'react';
import {Profile} from "./Profile";
import {RootStateType} from "../../Redux/reduxStore";
import {connect} from "react-redux";
import {setUserProfile, UserProfileType} from "../../Redux/ProfilePageReducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {userProfileData} from "../../API/api";


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
            userId = String(2);
        }
        userProfileData.getUserProfileInfo(userId)
            .then(data => {
                this.props.setUserProfile(data);
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
