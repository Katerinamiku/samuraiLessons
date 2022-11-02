import React from 'react';
import {Profile} from "./Profile";
import {RootStateType} from "../../Redux/reduxStore";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfileInfo,
    savePhoto, saveProfileData,
    updateStatus,
    UserProfileType
} from "../../Redux/reducers/ProfilePageReducer";
import {withRouter, RouteComponentProps, Redirect} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

type commonTypes = RouteComponentProps<withRouteType> & ProfilePageType;

export type ProfilePageType = mapStateToPropsType & dispatchType;

//-------------------ClassCompContainer-------------------------
class ProfileContainer extends React.Component<commonTypes> {

    refreshProfile() {
        let userId = Number(this.props.match.params.userId);
        if (!userId) {
            userId = Number(this.props.authorizedUserId);
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfileInfo(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<commonTypes>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
        this.refreshProfile()
    }

    render() {
        return (
            this.props.isAuth
                    ?  <Profile {...this.props}
                                profile={this.props.profile}
                                status={this.props.status}
                                updateStatus={this.props.updateStatus}
                                isOwner={!this.props.match.params.userId}
                                savePhoto={this.props.savePhoto}
                                saveProfileData={this.props.saveProfileData}
                    />
                    : <Redirect to={'/login'}/>
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
    authorizedUserId: string | null
    isAuth: boolean
}
type dispatchType = {
    getUserProfileInfo: (id: number) => void
    getStatus: (id: number) => void
    updateStatus: (status: string) => void
    savePhoto: (photoFile: File) => void
    saveProfileData: (formData: UserProfileType) => Promise<any>
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}
export default compose<React.ComponentType>(withAuthRedirect,
    connect(mapStateToProps, {getUserProfileInfo, getStatus, updateStatus, savePhoto, saveProfileData}),
    withRouter)
(ProfileContainer)


