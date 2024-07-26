import { lazy, Suspense } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import ROUTERS from "../constants/router";

const MainLayout = lazy(() => import('../layouts/main'))
const Home = lazy(() => import('../pages/Home'))

const router = createBrowserRouter([
  {
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        path: ROUTERS.HOME.path,
        element: (
          <Suspense>
            <Home />
          </Suspense>
        )
      }
    ]
  },

  {
    element: <>not fould</>,
    path: '*'
  }
])

export default router
