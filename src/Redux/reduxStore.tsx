import {applyMiddleware, combineReducers} from "redux";
import ProfilePageReducer, {ProfilePageActionsTypes} from "./reducers/ProfilePageReducer";
import MessagesPageReducer, {MessagesPageActionsTypes} from "./reducers/MessagesPageReducer";
import { legacy_createStore as createStore} from 'redux'
import {UsersReducer, UsersReducerActionsTypes} from "./reducers/UsersReducer";
import authReducer, {AuthActionsTypes} from "./reducers/authReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {FriendsActionsTypes, friendsReducer} from "./reducers/FriendsReducer";
import { reducer as formReducer } from "redux-form";
import {useDispatch} from "react-redux";
import {AppActionsTypes, appReducer} from "./reducers/appReducer";

const rootReducer = combineReducers({
    profilePage: ProfilePageReducer,
    messagesPage: MessagesPageReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    friends: friendsReducer,
    form: formReducer,
    app: appReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootStateType = ReturnType<typeof rootReducer>
//все типа actions для вcего app
export type AppActionType = UsersReducerActionsTypes | ProfilePageActionsTypes | MessagesPageActionsTypes | AuthActionsTypes | FriendsActionsTypes | AppActionsTypes;
//типизация Thunk
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, AppActionType>;
//типизация Dispatch
export type AppDispatch = ThunkDispatch<RootStateType, unknown, AppActionType>;


