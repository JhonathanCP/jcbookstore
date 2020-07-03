import AuthorPage from './pages/AuthorPage'
import CreateAuthor from './components/CreateAuthor'

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
]