import {Dispatch} from "redux";
import {authAPI} from "../API/api";

export type ActionsTypes =
    ReturnType<typeof setAuthUserData>

export type AuthMeType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}

export let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}
//в редьюсере копируем глубоко только то что меняем
export const authReducer = (state: AuthMeType = initialState, action: ActionsTypes): AuthMeType => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {...state, ...action.data, isAuth: true};
        }
        default:
            return state;
    }
    return state;
}

export default authReducer

//--------------AC-------------------
export const setAuthUserData = (data: AuthMeType) => {
    return {
        type: "SET_USER_DATA",
        data
    } as const
}
//---------------THUNK-----------------
export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.setAuthUserData()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(response.data.data));
                }
            });
    }
}
