import LoginServices from './services'

export const SET_TOKEN = 'login/SET_TOKEN'
export const LoginStore = {
    namespaced: true,
    state: {
        token: ''
    },
    actions: {
        signIn: async({commit}, payload) => {
            const res = await LoginServices.singIn(payload)
            const token = res.data.token
            commit(SET_TOKEN, token)
        },
        signUp: async({commit}, payload) => {
            const res = await LoginServices.singUp(payload)
            const token = res.data.token
            commit(SET_TOKEN, token)
        }
    },
    mutations: {
        [SET_TOKEN] (state,payload) {
            state.token = payload
        }
    }
}