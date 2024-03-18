import { RouteObject, createBrowserRouter } from 'react-router-dom'

import HomeLayout from '../layouts/Home'
import AuthLayout from '../layouts/Auth'

import HomePage from '../pages/home'
import LoginPage from '../pages/auth/login'
import RegisterPage from '../pages/auth/register'


const routers: RouteObject[] = [
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            { path: '', element: <HomePage /> },
        ],
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            { path: '/login', element: <LoginPage /> },
            { path: '/register', element: <RegisterPage /> },
        ],
    },
]

export const routes = createBrowserRouter(routers)