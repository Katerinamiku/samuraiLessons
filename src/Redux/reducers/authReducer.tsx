import {authAPI, securityAPI} from "../../API/api";
import {FormDataType} from "../../components/Login/LoginForm";
import {stopSubmit} from "redux-form";
import {AppThunkType} from "../reduxStore";

export type AuthActionsTypes = ReturnType<typeof setAuthUserData> | ReturnType<typeof detCaptchaUrlSuccess>
export type AuthMeType = {
    id: string,
    login: string,
    email: string,
    isAuth: boolean
    captchaUrl: string | null
}

export let initialState = {
    id: '',
    login: '',
    email: '',
    isAuth: false,
    captchaUrl: null, //if null - captcha is not required
}
//в редьюсере копируем глубоко только то что меняем
export const authReducer = (state: AuthMeType = initialState, action: AuthActionsTypes): AuthMeType => {
    switch (action.type) {
        case 'SET_USER_DATA':
        case 'GET_CAPTCHA':
        {
            return {...state, ...action.payload};
        }
        default:
            return state;
    }
    return state;
}

export default authReducer

//--------------AC-------------------
export const setAuthUserData = (id: string, email: string, login: string, isAuth: boolean) => {
    return {
        type: "SET_USER_DATA",
        payload: {id, email, login, isAuth}
    } as const
}
export const detCaptchaUrlSuccess = (captchaUrl: string) => {
    return {
        type: "GET_CAPTCHA",
        payload: {captchaUrl}
    } as const
}
//---------------THUNK-----------------
export const getAuthUserData = (): AppThunkType => {
    return (dispatch) => {
        authAPI.setAuthUserData()
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            });
    }
}
export const setLogin = (formData: FormDataType): AppThunkType => {
    return (dispatch) => {
        authAPI.setLoginData(formData)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    if (response.data.resultCode === 10) {
                        dispatch(getCaptchaUrl());
                    }
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                    dispatch(stopSubmit('Login', {_error: message}) as any);
                }
            });
    }
}
export const setLogout = (): AppThunkType => {
    return (dispatch) => {
        authAPI.setLogout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData('', '', '', false))
                }
            });
    }
}
export const getCaptchaUrl = (): AppThunkType => {
    return (dispatch) => {
        securityAPI.getCaptcha()
            .then(response => {
                dispatch(detCaptchaUrlSuccess(response.data.url))
                dispatch(getAuthUserData())
            });
    }
}
