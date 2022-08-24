import {Dispatch} from "redux";
import {FormDataType} from "../components/Login/LoginForm";
import {authAPI} from "../API/api";

export type ActionsTypes =
    ReturnType<typeof setLogin>

export let initialState = {
    email: null,
    password: null,
    rememberMe: false
}
//в редьюсере копируем глубоко только то что меняем
export const loginReducer = (state: FormDataType = initialState, action: ActionsTypes): FormDataType => {
    switch (action.type) {
        case 'SET_LOGIN': {
            return {...state, ...action.formData};
        }
        default:
            return state;
    }
    return state;
}

export default loginReducer

//--------------AC-------------------
export const setLogin = (formData: FormDataType) => {
    return {
        type: "SET_LOGIN",
        formData
    } as const
}
//---------------THUNK-----------------
export const setLoginData = (formData: FormDataType) => {
    return (dispatch: Dispatch) => {
        authAPI.setLoginData(formData)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setLogin(response.data));
                }
            });
    }
}
