import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "137233f8-ba0b-4d38-a7f9-d79d3e1c8363"
    }
});

export const usersAPI = {
    getUsers(SelectedPage = 2, UsersTotalCount = 3) {
        return instance.get(`users?page=${SelectedPage}&count=${UsersTotalCount}`)
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


