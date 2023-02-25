import { CircularProgress } from "@mui/material"
import { lazy, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import PrivateRoutes from "./PrivateRoutes"
import PublicRouter from "./PublicRoutes"

const HomePage = lazy(() => import("../pages/HomePage"))
const NewsPage = lazy(() => import("../pages/NewsPage"))
const ProfilePage = lazy(() => import("../pages/ProfilePage"))
const LoginPage = lazy(() => import("../pages/LoginPage"))
const RegisterPage = lazy(() => import("../pages/RegisterPage"))

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route element={<PublicRouter />}>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Route>
          <Route index path='/' element={<HomePage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route element={<PrivateRoutes />}>
            <Route path='/profile' element={<ProfilePage />} />
          </Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default AppRoutes
