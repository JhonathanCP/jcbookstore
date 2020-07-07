import AuthorPage from './pages/AuthorPage'
import CreateAuthor from './components/CreateAuthor'
import ListAuthors from './components/ListAuthors'
import EditAuthor from './components/EditAuthor'

export const AuthorRoutes = [
    {
        path: '/author',
        component: AuthorPage,
        meta: {/* metaetiquetas */
            requiresAuth: true/* Requiere autenticación */
        }
    },
    {
        path: '/author/create',
        component: CreateAuthor,
        meta: {/* metaetiquetas */
            requiresAuth: true/* Requiere autenticación */
        }
    },
    {
        path: '/author/list',
        component: ListAuthors,
        meta: {/* metaetiquetas */
            requiresAuth: true/* Requiere autenticación */
        }
    },
    {
        path: '/author/:id',
        name: 'editauthor',
        component: EditAuthor,
        meta: {/* metaetiquetas */
            requiresAuth: true/* Requiere autenticación */
        }
    }
]