import axios from 'axios'
// var urlBase = 'https://techpoker.herokuapp.com/api/'
// import store from '@/store'

// var obterTokenIdentity = function () {
//     let token = store.state.geral.accessToken;
//     if (!token || token === '$objAluno->getAccessTokenIdentity()') {
//         return 'UHFRUEdtYWRYdw==';
//     } else if (token === 'UHFYdG5zSkp6Vw==') {
//         return token;
//     }
//     return `Bearer ${token}`;
// }

var request = function (urlBase) {
    return axios.create({
        baseURL: urlBase,
        withCredentials: false,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    });
}

export default{

    get: async (urlBase, path) => {
        return await request(urlBase).get(path);
    },

    post: async (urlBase, path, body) => {
        return await request(urlBase).post(path, body);
    },

    put: async (urlBase, path, body) => {
        return await request(urlBase).put(path, body);
    },

    patch: async (urlBase, path, body) => {
        return await request(urlBase).patch(path, body);
    },

    delete: async (urlBase, path) => {
        return await request(urlBase).delete(path);
    },
}