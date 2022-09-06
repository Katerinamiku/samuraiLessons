import {applyMiddleware, combineReducers} from "redux";
import ProfilePageReducer from "./reducers/ProfilePageReducer";
import MessagesPageReducer from "./reducers/MessagesPageReducer";
import { legacy_createStore as createStore} from 'redux'
import {UsersReducer} from "./reducers/UsersReducer";
import authReducer from "./reducers/authReducer";
import thunkMiddleware from 'redux-thunk';
import {friendsReducer} from "./reducers/FriendsReducer";
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




