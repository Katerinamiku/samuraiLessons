
type setFriendsAT = {
    type: "SET_FRIENDS"
    friends: Array<UsersType>
}
export type ActionsTypes = setFriendsAT;

export type LocationType = {
    city: string
    country: string
}
export type PhotosType = {
    small: string
    large: string
}
export type UsersType = {
    id: number;
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location?: LocationType
}
export type FriendsPageType = {
    friends: Array<UsersType>
}

export let initialState = {
    friends: [],
};

export const friendsReducer = (state: FriendsPageType = initialState, action: ActionsTypes): FriendsPageType => {
    switch (action.type) {
        case "SET_FRIENDS":
            return {
                ...state, friends: [...action.friends]
            }
        default:
            return state;
    }
    return state;
}

//action creators
export const setFriends = (friends: Array<UsersType>) => {
    return {
        type: "SET_FRIENDS",
        friends
    }
}
//Thunks

