import {combineReducers} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import MessagesPageReducer from "./MessagesPageReducer";
import { legacy_createStore as createStore} from 'redux'


export type RootStateType = ReturnType<typeof rootReducer>
// export type DispatchType = typeof store.dispatch;
// export type ReduxStoreType = typeof store;


const rootReducer = combineReducers({
    profilePage: ProfilePageReducer,
    messagesPage: MessagesPageReducer
});

export const store = createStore(rootReducer);




