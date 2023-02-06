
import MainPage from '@/pages/MainPage'
import PostsPage from '@/pages/PostsPage'
import PostsPageWithStore from '@/pages/PostsPageWithStore'
import PostsPageCompositionAPI from '@/pages/PostsPageCompositionAPI'
import AboutPage from '@/pages/AboutPage'
import PostsIDPage from '@/pages/PostsIDPage'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/posts',
        component: PostsPage
    },
    {
        path: '/store',
        component: PostsPageWithStore
    },
    {
        path: '/composition',
        component: PostsPageCompositionAPI
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/posts/:id',
        component: PostsIDPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory ()
})

export default router