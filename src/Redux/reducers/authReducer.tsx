import {Dispatch} from "redux";
import {authAPI} from "../../API/api";
import {FormDataType} from "../../components/Login/LoginForm";
import {stopSubmit} from "redux-form";


export type ActionsTypes =
    ReturnType<typeof setAuthUserData>

export type AuthMeType = {
    id: string,
    login: string,
    email: string,
    isAuth: boolean
}

export let initialState = {
    id: '',
    login: '',
    email: '',
    isAuth: false
}
//в редьюсере копируем глубоко только то что меняем
export const authReducer = (state: AuthMeType = initialState, action: ActionsTypes): AuthMeType => {
    switch (action.type) {
        case 'SET_USER_DATA': {
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
//---------------THUNK-----------------
export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.setAuthUserData()
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            });
    }
}
export const setLogin = (formData: FormDataType) => {
    return (dispatch: Dispatch) => {
        authAPI.setLoginData(formData)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData() as any)
                } else {
                    let message =  response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                    dispatch(stopSubmit('Login', {_error: message}));
                }
            });
    }
}
export const setLogout = () => {
    return (dispatch: Dispatch) => {
        authAPI.setLogout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData('', '', '', false))
                }
            });
    }
}
