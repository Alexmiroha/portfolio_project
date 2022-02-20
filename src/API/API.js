import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "137233f8-ba0b-4d38-a7f9-d79d3e1c8363"
    }
});

export const usersAPI = {
    getUsers(SelectedPage = 1, UersPageSize = 5) {
        return instance.get(`users?page=${SelectedPage}&count=${UersPageSize}`)
            .then(response => {
                return response.data;
            })
    },
    followUser(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },

}

export const profileAPI = {
    getUsersProfile(userID) {
        return instance.get(`profile/${userID}`)
            .then(response => {
                return response.data;
            })
    },
    getUserStatus(userID) {
        return instance.get(`profile/status/${userID}`)
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, { status: status})
    }
}

export const headerAPI = {
    getProfileData() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}


