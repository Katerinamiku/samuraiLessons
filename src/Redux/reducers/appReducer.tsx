import {AppThunkType} from "../reduxStore";
import {getAuthUserData} from "./authReducer";

export type AppActionsTypes = ReturnType<typeof setInitializedAC>
export type AppPropsType = {
    initialized: boolean
}
export let initialState = {
    initialized: false
}
//в редьюсере копируем глубоко только то что меняем
export const appReducer = (state: AppPropsType = initialState, action: AppActionsTypes): AppPropsType => {
    switch (action.type) {
        case 'SET_INITIALIZED': {
            return {...state, initialized: true};
        }
        default:
            return state;
    }
    return state;
}

//--------------AC-------------------
export const setInitializedAC = () => {
    return {
        type: "SET_INITIALIZED"
    } as const
}
// // ---------------THUNK-----------------
// export const initializeAppTC = (): AppThunkType => {
//     return (dispatch) => {
//         let promise = dispatch(getAuthUserData())
//         promise.then(() => {
//             dispatch(setInitializedAC())
//         } )
//     }
// }

export const initializeAppTC = (): AppThunkType => async (dispatch) => {
    await dispatch(getAuthUserData())
    dispatch(setInitializedAC())
}
