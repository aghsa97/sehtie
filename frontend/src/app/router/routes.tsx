import { RouteObject, createBrowserRouter } from 'react-router-dom'

import App from '../layout/App'

import HomePage from '../pages/home'
import LoginPage from '../pages/auth/login'
import RegisterPage from '../pages/auth/register'


const routers: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: '/login', element: <LoginPage /> },
            { path: '/register', element: <RegisterPage /> },
        ],
    },
]

export const routes = createBrowserRouter(routers)