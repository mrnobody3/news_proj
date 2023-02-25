import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { selectIsLoggedIn } from '../redux/auth/authSelectors'

const PublicRoutes = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  if (isLoggedIn) {
    return <Navigate to='/' replace />
  }
  return <Outlet />
}

export default PublicRoutes
