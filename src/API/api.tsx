import axios from "axios";

//с помощью этого можно поместить настройки по работе с опр апи чтобы не дублировать код
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '423c54e8-cb45-4004-b2cf-718d12931665'
    }
})
//сделаем обьект c методами, где обьединим все для удобства работы с эндпоинтами
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {}).then(response => {
            return response.data
        })
    },
    setFollow(id: number) {
        return instance.post(`follow/${id}`)
    },
    setUnfollow(id: number) {
        return instance.delete(`follow/${id}`)
    },
    getUserProfileInfo(id: number) {
        return instance.get(`profile/` + id)
    },
    getFriends() {
        return instance.get('https://social-network.samuraijs.com/api/1.0/users?friend=true').then(response => {
            return response.data
        })
    }
}

export const authAPI = {
    setAuthUserData() {
        return instance.get(`auth/me`)
    }
}