import { RouteObject, Navigate, Outlet } from 'react-router-dom'

import { AuthLayout } from '@/modules/auth/layout'
import Login from '@/modules/auth/pages/Login'

export const authRouter: RouteObject[] = [
  {
    path: '/',
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace={true} />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  }
]
