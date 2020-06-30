import {httpClient} from '@/plugins/axios'

export default {
    singIn ({ email, password }) {
        return httpClient.post('/signin',{email,password})
    },
    singUp ({ email,password }) {
        return httpClient.post('/signin',{email,password})
    }
}