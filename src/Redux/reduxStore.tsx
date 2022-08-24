import {applyMiddleware, combineReducers} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import MessagesPageReducer from "./MessagesPageReducer";
import { legacy_createStore as createStore} from 'redux'
import {UsersReducer} from "./UsersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import {friendsReducer} from "./FriendsReducer";
import { reducer as formReducer } from "redux-form";


export type RootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: ProfilePageReducer,
    messagesPage: MessagesPageReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    friends: friendsReducer,
    form: formReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));




