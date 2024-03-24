import { RouteObject, createBrowserRouter } from 'react-router-dom'

import HomeLayout from '../layouts/Home'
import AuthLayout from '../layouts/Auth'

import HomePage from '../pages/home/home'
import LoginPage from '../pages/auth/login'
import RegisterPage from '../pages/auth/register'
import DashboardLayout from '../layouts/Dashboard'
import PatientDashboardPage from '../pages/dashboard/patient-dashboard'
import DoctorDashboardPage from '../pages/dashboard/doctor-dashboard'


const routers: RouteObject[] = [
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            { path: '', element: <HomePage /> },
        ],
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            { path: 'login', element: <LoginPage /> },
            { path: 'register', element: <RegisterPage /> },
        ],
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            { path: 'patient', element: <PatientDashboardPage /> },
            { path: 'doctor', element: <DoctorDashboardPage /> },
        ],
    }
]

export const routes = createBrowserRouter(routers)