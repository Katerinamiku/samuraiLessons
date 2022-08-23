import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {RootStateType} from "../Redux/reduxStore";

type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
  return {
      isAuth: state.auth.isAuth
  }
}

export function withAuthRedirect <T>(Component: ComponentType<T>) {
    function RedirectComponent(props: MapStateToPropsType) {
        let {isAuth, ...restProps} = props;
        if (!isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <Component {...restProps as T}/>
    }

    let ConnectedRedirectComonent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComonent;
}
