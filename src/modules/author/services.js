import {httpClient} from '@/plugins/axios'

export default {
    createAuthor(author){
        return httpClient.post('/author', author)
    }
}