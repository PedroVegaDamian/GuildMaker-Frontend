import { lazy, Suspense } from 'react'
import { RouteObject, Outlet } from 'react-router-dom'

import { DashboardLayout } from '@/modules/dashboard/layout'

const Home = lazy(() => import('@/modules/dashboard/pages/Home'))

const Profile = lazy(() => import('@/modules/dashboard/pages/Profile'))
const Groups = lazy(() => import('@/modules/dashboard/pages/Groups'))
const Tasks = lazy(() => import('@/modules/dashboard/pages/Tasks'))
const Members = lazy(() => import('@/modules/dashboard/pages/Members'))
const RegisterMember = lazy(
  () => import('@/modules/dashboard/pages/RegisterMember')
)
const Configuration = lazy(
  () => import('@/modules/dashboard/pages/Configuration')
)

const Loading = () => <div>Loading...</div>

export const dashboardRouter: RouteObject[] = [
  {
    path: '/dashboard',
    element: (
      <DashboardLayout>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      { index: true, element: <Home /> },
      {
        path: '',
        element: <Home />
      },
      {
        path: 'perfil',
        element: <Profile />
      },
      {
        path: 'grupos',
        element: <Groups />
      },
      {
        path: 'tareas',
        element: <Tasks />
      },
      {
        path: 'miembros',
        children: [
          {
            index: true,
            element: <Members />
          },
          {
            path: 'registrar',
            element: <RegisterMember />
          }
        ]
      },
      {
        path: 'configuracion',
        element: <Configuration />
      }
    ]
  }
]
