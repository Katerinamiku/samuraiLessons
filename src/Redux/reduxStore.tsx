import {combineReducers} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import MessagesPageReducer from "./MessagesPageReducer";
import { legacy_createStore as createStore} from 'redux'
import {UsersReducer} from "./UsersReducer";


export type RootStateType = ReturnType<typeof rootReducer>
// export type DispatchType = typeof store.dispatch;
// export type ReduxStoreType = typeof store;


const rootReducer = combineReducers({
    profilePage: ProfilePageReducer,
    messagesPage: MessagesPageReducer,
    usersPage: UsersReducer
});

export const store = createStore(rootReducer);




