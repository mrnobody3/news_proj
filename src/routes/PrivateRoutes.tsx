import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

import { selectIsLoggedIn } from '../redux/auth/authSelectors'

const PrivateRoutes = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  if (!isLoggedIn) {
    return <Navigate to='/login' replace />
  }
  return <Outlet />
}

export default PrivateRoutes
