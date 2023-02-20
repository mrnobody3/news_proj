import { CircularProgress } from '@mui/material'
import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('../pages/HomePage'))
const NewsPage = lazy(() => import('../pages/NewsPage'))
const ProfilePage = lazy(() => import('../pages/ProfilePage'))

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default AppRoutes
