import axios from "axios";
import {FormDataType} from "../components/Login/LoginForm";

//с помощью этого можно поместить настройки по работе с опр апи чтобы не дублировать код
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'f27eec27-3207-4d58-92ee-5102237ee07d'
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
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getUserProfileInfo(id)
    },
    getFriends() {
        return instance.get('https://social-network.samuraijs.com/api/1.0/users?friend=true').then(response => {
            return response.data
        })
    }
}

export const profileAPI = {
    getUserProfileInfo(id: number) {
        return instance.get(`profile/` + id)
    },
    getStatus(id: number) {
        return instance.get(`profile/status/` + id)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    }
}

export const authAPI = {
    setAuthUserData() {
        return instance.get(`auth/me`)
    },
    setLoginData(formData: FormDataType) {
        return instance.post(`/auth/login`, {email: formData.email, password: formData.password, rememberMe: formData.rememberMe})
    }
}

