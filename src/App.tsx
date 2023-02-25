import React, { useEffect } from 'react'
import Header from './components/Header'
import { useAppDispatch } from './hooks/useReduxWithType'
import { current } from './redux/auth/authOperations'
import AppRoutes from './routes'
function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(current())
  }, [dispatch])

  return (
    <>
      <Header />
      <AppRoutes />
    </>
  )
}

export default App
