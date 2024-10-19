import { createBrowserRouter } from 'react-router-dom'

import { authRouter } from '@/modules/auth/routes'
import { dashboardRouter } from '@/modules/dashboard/routes'

export const mainRouter = createBrowserRouter([
  ...authRouter,
  ...dashboardRouter
])
