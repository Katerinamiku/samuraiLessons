import React from 'react';
import {Profile} from "./Profile";
import {RootStateType} from "../../Redux/reduxStore";
import {connect} from "react-redux";
import {getUserProfileInfo, UserProfileType} from "../../Redux/ProfilePageReducer";
import {withRouter, RouteComponentProps, Redirect} from "react-router-dom";

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
        this.props.getUserProfileInfo(userId)
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }

        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         />
            </div>
        )
    }
}

//---------------------withRouter-------------------------
type withRouteType = {
    userId: string | undefined
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

//-----------------------connect----------------
type mapStateToPropsType = {
    profile: UserProfileType | null
    isAuth: boolean
}
type dispatchType = {
    getUserProfileInfo: (id: string) => void
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {getUserProfileInfo})(WithUrlDataContainerComponent)
