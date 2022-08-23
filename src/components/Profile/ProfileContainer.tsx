import React from 'react';
import {Profile} from "./Profile";
import {RootStateType} from "../../Redux/reduxStore";
import {connect} from "react-redux";
import {getUserProfileInfo, UserProfileType} from "../../Redux/ProfilePageReducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

type commonTypes = RouteComponentProps<withRouteType> & ProfilePageType;
export type ProfilePageType = mapStateToPropsType & dispatchType;

//----------------------ClassCompContainer------------------------------
class ProfileContainer extends React.Component<commonTypes> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId);
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfileInfo(userId)
    }
    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
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
}
type dispatchType = {
    getUserProfileInfo: (id: number) => void
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileInfo}),
    withRouter)
(ProfileContainer)


