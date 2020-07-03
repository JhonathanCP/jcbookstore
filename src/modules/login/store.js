const SET_TOKEN = 'login/SET_TOKEN'
export const LoginStore = {
    namespaced: true,
    state: {
        token: '',
    },
    actions: {
        signIn: async({ commit }, payload) => {
            commit(SET_TOKEN, payload)
        },
        signUp: async({ commit }, payload) => {
            commit(SET_TOKEN, payload)
        }
    },
    mutations: {
        [SET_TOKEN] (state,payload) {
            localStorage.token = payload
            state.token = payload
        }
    },
    getter: {
        isUserConnected: (state) =>{
            return state.token ? true :false
        }
    }
}