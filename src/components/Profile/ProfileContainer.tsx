import React from 'react';
import {Profile} from "./Profile";
import {RootStateType} from "../../Redux/reduxStore";
import {connect} from "react-redux";
import {getStatus, getUserProfileInfo, updateStatus, UserProfileType} from "../../Redux/ProfilePageReducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {compose} from "redux";

type commonTypes = RouteComponentProps<withRouteType> & ProfilePageType;
export type ProfilePageType = mapStateToPropsType & dispatchType;

//-------------------ClassCompContainer-------------------------
class ProfileContainer extends React.Component<commonTypes> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId);
        if (!userId) {
            userId = 18304;
        }
        this.props.getUserProfileInfo(userId)
        this.props.getStatus(userId)
    }
    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         />
            </div>
        )
    }
}
//-------------------------Redirect HOC-------------------
//создаем HOC над ProfileContainer который будет делать редирект: конт комп над конт комп - и уже передаем крайний
// конт комп дальше в withRoute - это фунекуия withAuthRedirect

//--------------------------withRouter-------------------------
//делаем запросы на сервер с пом комп - сайд эффекты. этой ф нужна инфа от url, чтобы отобразить верную страницу. Поэтому прежде чем отдать ее connect обернем ее withRouterом
type withRouteType = {
    userId: string
}
//--------------------------connect----------------
type mapStateToPropsType = {
    profile: UserProfileType | null
    status: string
}
type dispatchType = {
    getUserProfileInfo: (id: number) => void
    getStatus: (id: number) => void
    updateStatus: (status: string) => void
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileInfo, getStatus, updateStatus}),
    withRouter)
(ProfileContainer)


